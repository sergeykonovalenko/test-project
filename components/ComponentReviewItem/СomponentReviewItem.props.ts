import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { TFormSchema } from '@/components/MealReviewPage/MealReviewPage';

export interface ComponentReviewItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  image: string;
  title: string;
  rating: number;
  fieldName: keyof TFormSchema;
  register: UseFormRegister<FieldValues>;
  error: FieldError;
}
