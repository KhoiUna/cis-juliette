import { ReactChild } from "react";

export interface LayoutProps {
  children: ReactChild | ReactChild[];
  title: string;
}

export interface NavLinkProps {
  href: string;
  text: string;
}

export interface CardProps {
  children: ReactChild | ReactChild[];
}

export interface QuoteBlockProps {
  children: ReactChild | ReactChild[];
}
