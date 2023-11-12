import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { MealReviewProps } from '@/components/MealReview/MealReview.props';
import FieldBox from '@/components/FieldBox/FieldBox';
import MealCard from '@/components/MealCard/MealCard';

const Parent = styled.div`
  margin-bottom: 150px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 11px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 234px 1fr;
  gap: 16px;
`;

const TextareaFieldBox = styled(FieldBox)`
  textarea {
    height: 100%;
  }
`;

const MealReview = ({ ...props }: MealReviewProps): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Parent {...props}>
      <Title>Meal Review</Title>
      <Row>
        <MealCard
          image="/img/base/meal.jpg"
          name="Morroccan Chicken With Couscous"
          rating={3}
        />
        <TextareaFieldBox
          {...register('reviewMeal')}
          error={errors.reviewMeal}
          label="Meal Summary Review"
          asTag="textarea"
        />
      </Row>
    </Parent>
  );
};

export default MealReview;
