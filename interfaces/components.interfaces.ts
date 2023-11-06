import { ComponentReviewItemProps } from '@/components/ComponentReviewItem/СomponentReviewItem.props';

type ComponentReviewItemBaseProps = Pick<
  ComponentReviewItemProps,
  'image' | 'title' | 'rating'
>;

export interface IComponents {
  components: ComponentReviewItemBaseProps[];
}
