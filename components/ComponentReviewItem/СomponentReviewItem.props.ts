import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';
import { TFormSchema } from '@/components/MealReviewPage/MealReviewPage';

export interface ComponentReviewItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  image: string;
  title: string;
  rating: number;
  // fieldName: keyof TFormSchema;
  // fieldName: Extract<keyof TFormSchema, string>;
  fieldName: string;
}
