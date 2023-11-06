import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MealCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string;
  name: string;
  rating: number;
}
