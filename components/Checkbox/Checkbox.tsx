import styled from 'styled-components';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { CheckboxProps } from '@/components/Checkbox/Checkbox.props';

const Label = styled.label`
  display: flex;
  align-items: center;

  & > *:last-child {
    margin-right: 0;
  }
`;

const Input = styled.input``;

const Icon = styled.span`
  display: block;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  background: url('/img/bg/check--white.svg') no-repeat center center;
  background-size: 10px auto;
  border: 1.5px solid var(--colors-gray-5);
  border-radius: 4px;
  transition: all 0.15s ease-out;
  cursor: pointer;

  ${Label}[data-error] & {
    border-color: var(--colors-error);
  }

  &:hover {
    border-color: var(--colors-gray-1);

    ${Label}[data-error] & {
      border-color: var(--colors-error);
    }
  }

  ${Input}:checked ~ & {
    background-color: var(--colors-main);
    border-color: var(--colors-main);
  }

  ${Input}:checked ~ &:hover {
    background-color: var(--colors-main--light);
    border-color: var(--colors-main--light);
  }

  ${Input}:checked ~ &:active {
    background-color: var(--colors-main--darken);
    border-color: var(--colors-main--darken);
  }
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 1.33333;
  color: var(--colors-gray-4);

  ${Label}[data-error] & {
    color: var(--colors-error);
  }

  a {
    text-decoration: underline;
    color: var(--colors-main--light);

    ${Label}[data-error] & {
      color: var(--colors-error);
    }

    &:hover {
      color: var(--colors-main);

      ${Label}[data-error] & {
        color: var(--colors-error);
      }
    }

    &:active {
      color: var(--colors-main--darken);

      ${Label}[data-error] & {
        color: var(--colors-error);
      }
    }
  }
`;

const Checkbox = forwardRef(
  (
    { className, label, error, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
    return (
      <Label className={className} {...(error ? { 'data-error': true } : {})}>
        <Input
          className="visually-hidden"
          ref={ref}
          {...props}
          type="checkbox"
        />
        <Icon />
        {label && <Text>{label}</Text>}
      </Label>
    );
  }
);

export default Checkbox;
