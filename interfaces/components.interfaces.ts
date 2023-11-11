import { ComponentReviewItemProps } from '@/components/ComponentReviewItem/СomponentReviewItem.props';

export type IComponent = Pick<
  ComponentReviewItemProps,
  'image' | 'title' | 'rating'
>;

export interface IComponents {
  components: IComponent[];
}
