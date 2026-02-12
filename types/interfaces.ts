export interface SubmenuItem {
  label: string;
  description: string;
  href: string;
}

export interface SubmenuSection {
  title: string;
  menu: SubmenuItem[];
}

export interface NavMenuItem {
  label: string;
  dropdown: boolean;
  subMenu?: SubmenuSection[];
}