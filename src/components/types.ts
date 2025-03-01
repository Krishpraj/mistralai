// Common types used across components
export interface FeatureItemProps {
  title: string;
  description: string;
  iconSvg: string;
}

export interface LinkItemProps {
  text: string;
  iconSvg?: string;
  href?: string;
}

export interface NavItemProps {
  text: string;
  href?: string;
}

export interface FooterColumnProps {
  title: string;
  links: string[];
}
