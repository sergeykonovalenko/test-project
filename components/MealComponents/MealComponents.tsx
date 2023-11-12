import styled from 'styled-components';
import { ReactElement } from 'react';
import СomponentReviewList from '@/components/СomponentReviewList/СomponentReviewList';
import { useComponents } from '@/store/store';
import { MealComponentsProps } from '@/components/MealComponents/MealComponents.props';

const Parent = styled.div`
  margin-bottom: 34px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 31px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
`;

const MealComponents = ({ ...props }: MealComponentsProps): ReactElement => {
  const components = useComponents((state) => state.components);

  return (
    <Parent {...props}>
      <Title>Meal Components</Title>
      {components.length > 0 && <СomponentReviewList components={components} />}
    </Parent>
  );
};

export default MealComponents;
