import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface MealComponentsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
