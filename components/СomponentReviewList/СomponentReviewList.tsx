import { ReactElement } from 'react';
import styled from 'styled-components';
import { ComponentReviewListProps } from '@/components/СomponentReviewList/СomponentReviewList.props';
import ComponentReviewItem from '@/components/ComponentReviewItem/ComponentReviewItem';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledComponentReviewItem = styled(ComponentReviewItem)`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ComponentReviewList = ({
  components,
  register,
  errors,
  ...props
}: ComponentReviewListProps): ReactElement => {
  return (
    <List {...props}>
      {components.map((component, index) => (
        <StyledComponentReviewItem
          key={index}
          title={component.title}
          image={component.image}
          rating={component.rating}
          fieldName={`reviewComponent${index + 1}`}
          register={register}
          error={errors[`reviewComponent${index + 1}`]}
        />
      ))}
    </List>
  );
};

export default ComponentReviewList;
