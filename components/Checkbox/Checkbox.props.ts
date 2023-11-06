import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';

export interface CheckboxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: ReactElement | string;
  error?: FieldError;
}
