import { ReactElement } from 'react';
import { MealCardProps } from '@/components/MealCard/MealCard.props';
import styled from 'styled-components';
import Image from 'next/image';
import Rating from '@/components/Rating/Rating';

const Parent = styled.div`
  padding: 16px;
  border: 1px solid var(--colors-gray-6);
  border-radius: 8px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const Name = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
`;

const MealCard = ({
  image,
  name,
  rating,
  ...props
}: MealCardProps): ReactElement => {
  return (
    <Parent {...props}>
      <StyledImage src={image} width={202} height={151} alt="" />
      <Name>{name}</Name>
      <Rating currentRating={rating} showLabel />
    </Parent>
  );
};

export default MealCard;
