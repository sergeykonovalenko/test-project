import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';

export interface FieldBoxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: FieldError;
  asTag?: string;
  fieldRightElement?: ReactElement;
}
