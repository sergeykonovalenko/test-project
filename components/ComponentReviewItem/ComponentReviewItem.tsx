import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { ComponentReviewItemProps } from '@/components/ComponentReviewItem/СomponentReviewItem.props';
import Component from '@/components/Сomponent/Component';
import FieldBox from '@/components/FieldBox/FieldBox';

const Item = styled.li`
  display: grid;
  grid-template-columns: 218px 1fr;
  gap: 32px;
`;

const RightCol = styled.div``;

const ComponentReviewItem = ({
  title,
  image,
  rating,
  fieldName,
  ...props
}: ComponentReviewItemProps): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Item {...props}>
      <Component title={title} image={image} rating={rating} />
      <RightCol>
        <FieldBox
          label="Your thoughts about the component"
          {...register(fieldName)}
          error={errors[fieldName]}
        />
      </RightCol>
    </Item>
  );
};

export default ComponentReviewItem;
