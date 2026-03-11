import { LucideIcon } from "lucide-react";

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

export interface skillProps {
  name: string;
  Icon: LucideIcon;
}

export interface projectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl: string;
}

export interface UserProps {
  id: number;
  name: string;
  profession: string;
  userImage: string;
  review: string;
}
