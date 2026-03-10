export interface navProps {
  openNav: () => void;
}

export interface mobileProps {
  showNav: boolean;
  closeNav: () => void;
}

export interface sectionHeaderProps {
  title_1: string;
  title_2: string;
  description: string;
}
