import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface FieldBoxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  asTag?: string;
  fieldRightElement?: ReactElement;
}
