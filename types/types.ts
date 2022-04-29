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

export interface DropdownProps {
  admissionYear: number;
  handleChangeSelect: () => void;
}

export interface YearInputProps {
  handleChangeAdmissionYear: ({ target }) => void;
}

export interface TextLoaderProps {
  loadingText: string;
  speed: number;
}

export interface ConsoleProps {
  actionArray: { field: string; value: string }[];
}

export interface BlinkCaretProps {
  speed: number;
}
