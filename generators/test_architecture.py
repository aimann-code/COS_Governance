"""Regression checks for omissions, source changes and broken parent/path relationships."""
import copy
import json
import unittest
from pathlib import Path
from check_architecture import validate_architecture

ROOT = Path(__file__).resolve().parents[1]


class ArchitectureChecks(unittest.TestCase):
    def setUp(self):
        self.arch = json.loads((ROOT / 'architecture/objects.yaml').read_text())
        self.source = json.loads((ROOT / 'architecture/source-inventory.yaml').read_text())

    def node(self, name):
        return next(r for r in self.arch['architecture'] if r['Display_Name'] == name)

    def test_complete_baseline(self):
        self.assertTrue(validate_architecture(self.arch, self.source))

    def test_missing_finance_rejected(self):
        self.arch['architecture'].remove(self.node('Finance Engine'))
        with self.assertRaises(ValueError): validate_architecture(self.arch, self.source)

    def test_wrong_suite_rejected(self):
        self.node('Finance Engine')['Parent_Ref'] = self.node('Supply & Operations')['Draft_Ref']
        with self.assertRaisesRegex(ValueError, 'Source parent'): validate_architecture(self.arch, self.source)

    def test_alias_cannot_become_second_engine(self):
        row = copy.deepcopy(self.node('Procurement Engine'))
        row.update(Draft_Ref='LOCAL-PURCHASE-EXAMPLE', Display_Name='Purchase Engine', File_Slug='purchase-engine')
        self.arch['architecture'].append(row)
        with self.assertRaises(ValueError): validate_architecture(self.arch, self.source)

    def test_lost_alias_rejected(self):
        self.node('HRMS')['Aliases'] = []
        with self.assertRaisesRegex(ValueError, 'HRMS alias'): validate_architecture(self.arch, self.source)

    def test_changed_source_name_rejected(self):
        self.node('Inventory Engine')['Source_Name'] = 'Something Else'
        with self.assertRaisesRegex(ValueError, 'Source name'): validate_architecture(self.arch, self.source)

    def test_duplicate_slug_rejected(self):
        self.node('Inventory Engine')['File_Slug'] = self.node('Finance Engine')['File_Slug']
        with self.assertRaisesRegex(ValueError, 'slug'): validate_architecture(self.arch, self.source)

    def test_unresolved_component_parent_rejected(self):
        self.node('Employee Registration')['Parent_Ref'] = 'MISSING'
        with self.assertRaisesRegex(ValueError, 'parent'): validate_architecture(self.arch, self.source)


if __name__ == '__main__':
    unittest.main()
