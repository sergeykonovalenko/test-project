import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export interface MealReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  register: UseFormRegister<FieldValues>;
  error: FieldError;
}
