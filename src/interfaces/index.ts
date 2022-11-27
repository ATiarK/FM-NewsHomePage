import { ReactNode } from 'react';

export default interface LayoutProps {
  children?: ReactNode;
}

export interface ICube {
  Image?: string;
  Num?: number | string;
  Title: string;
  Content: string;
}
