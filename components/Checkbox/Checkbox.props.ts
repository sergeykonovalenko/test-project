import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface CheckboxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: ReactElement | string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}
