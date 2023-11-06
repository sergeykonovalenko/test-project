import Image from 'next/image';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { ComponentProps } from '@/components/Сomponent/Component.props';
import Rating from '@/components/Rating/Rating';

const Parent = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  align-items: center;
  gap: 8px;
`;

const StyledImage = styled(Image)`
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.15));
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.428571;
`;

const Component = ({
  image,
  title,
  rating,
  ...props
}: ComponentProps): ReactElement => {
  return (
    <Parent {...props}>
      <StyledImage src={image} width={72} height={47} priority alt="" />
      <div>
        <Title>{title}</Title>
        <Rating currentRating={rating} />
      </div>
    </Parent>
  );
};

export default Component;
