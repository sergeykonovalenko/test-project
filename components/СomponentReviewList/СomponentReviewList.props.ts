import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { IComponent } from '@/interfaces/components.interfaces';

export interface ComponentReviewListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  components: IComponent[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
