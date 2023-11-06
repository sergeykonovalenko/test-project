import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string;
  title: string;
  rating: number;
}
