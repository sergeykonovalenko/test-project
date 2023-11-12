'use client';

import { ReactElement, useState } from 'react';
import { z } from 'zod';
import {
  SubmitHandler,
  SubmitErrorHandler,
  useForm,
  FormProvider,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import Container from '@/components/Container/Container';
import MealComponents from '@/components/MealComponents/MealComponents';
import { MealReviewPageProps } from '@/components/MealReviewPage/MealReviewPage.props';
import MealReview from '@/components/MealReview/MealReview';
import FieldBox from '@/components/FieldBox/FieldBox';
import EditIcon from '@/public/img/icons/edit.svg';
import Checkbox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';
import ModalConfirm from '@/components/ModalConfirm/ModalConfirm';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.166666;
  letter-spacing: -0.3px;
  text-align: center;
`;

const Form = styled.form``;

const NameFieldBox = styled(FieldBox)`
  margin-bottom: 32px;

  input {
    padding-right: 45px;
  }
`;

const AgreementCheckbox = styled(Checkbox)`
  margin-bottom: 36px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  font-weight: 500;
`;

const formSchema = z.object({
  reviewComponent1: z
    .string()
    .trim()
    .min(1, { message: 'This field is required' }),
  reviewComponent2: z
    .string()
    .trim()
    .min(1, { message: 'This field is required' }),
  reviewComponent3: z
    .string()
    .trim()
    .min(1, { message: 'This field is required' }),
  reviewMeal: z.string().trim().min(1, { message: 'This field is required' }),
  userName: z
    .string()
    .trim()
    .min(1, { message: 'This field is required' })
    .max(20, { message: 'Nickname must contain at most 20 characters' }),
  agreement: z.literal(true),
});

export type TFormSchema = z.infer<typeof formSchema>;

const MealReviewPage = ({ ...props }: MealReviewPageProps): ReactElement => {
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

  const showModalConfirm = () => {
    setIsShowModalConfirm(true);
  };

  const hideModalConfirm = () => {
    setIsShowModalConfirm(false);
  };

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Partial<TFormSchema>> = (data) => {
    showModalConfirm();
    console.log('data:', data);
  };

  const onErrorSubmit: SubmitErrorHandler<TFormSchema> = (errors) => {
    console.log('errors:', errors);
  };

  return (
    <>
      <Container {...props}>
        <Title>MealReview</Title>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit, onErrorSubmit)}>
            <MealComponents />
            <MealReview />
            <NameFieldBox
              {...methods.register('userName')}
              error={methods.formState.errors.userName}
              label="Your Nickname (other users will see this)"
              fieldRightElement={
                <EditIcon widht={24} height={24} fill="#34a34f" />
              }
            />
            <AgreementCheckbox
              {...methods.register('agreement')}
              error={methods.formState.errors.agreement}
              label={
                <>
                  I confirm that I have read and accepted{' '}
                  <a href="#">Terms and Conditions</a> and{' '}
                  <a href="#">Privacy Policy</a>
                </>
              }
            />
            <SubmitButton type="submit">Submit Review</SubmitButton>
          </Form>
        </FormProvider>
      </Container>
      {isShowModalConfirm && (
        <ModalConfirm isOpen={isShowModalConfirm} onClose={hideModalConfirm} />
      )}
    </>
  );
};

export default MealReviewPage;
