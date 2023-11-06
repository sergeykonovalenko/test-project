import { ComponentReviewItemProps } from '@/components/ComponentReviewItem/СomponentReviewItem.props';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface ComponentReviewListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  components: ComponentReviewItemProps[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
