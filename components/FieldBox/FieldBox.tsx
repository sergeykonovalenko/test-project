import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FieldBoxProps } from '@/components/FieldBox/FieldBox.props';
import styled, { css } from 'styled-components';

const Parent = styled.div`
  position: relative;
`;

const Input = styled.input`
  ${Parent}[data-error] & {
    border-color: var(--colors-error);
    caret-color: var(--colors-error);

    &:hover,
    &:focus {
      border-color: var(--colors-error);
    }
  }
`;

const Label = styled.span`
  position: absolute;
  top: 16px;
  left: 12px;
  padding: 0 4px;
  max-width: calc(100% - 32px);
  color: var(--colors-gray-4);
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #fff;
  pointer-events: none;
  transition: all 0.125s ease-in;

  ${Parent}[data-error] & {
    color: var(--colors-error);
  }

  ${Input}:focus + &,
  ${Parent}[data-filled] & {
    top: -8px;
    font-weight: 500;
    font-size: 12px;
  }

  ${Parent}[data-filled] & {
    color: var(--colors-gray-1);
  }

  ${Input}:focus + & {
    color: var(--colors-main--light);

    ${Parent}[data-error] & {
      color: var(--colors-error);
    }
  }
`;

const FieldRightElement = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none;

  ${Parent}[data-error] & {
    svg {
      fill: var(--colors-error);
    }
  }
`;

const Error = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 12px;
  color: var(--colors-error);
`;

const FieldBox = forwardRef(
  (
    {
      className,
      label,
      error,
      onBlur,
      onChange,
      asTag,
      fieldRightElement,
      ...props
    }: FieldBoxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
    const [filled, setFilled] = useState<Boolean>(false);
    const innerRef = useRef<HTMLInputElement | null>(null);

    // Create a ref that includes both innerRef and forwardedRef
    const combinedRef = (node: HTMLInputElement) => {
      innerRef.current = node;

      // Assign to forwardedRef, depending on its type
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef && typeof forwardedRef === 'object') {
        forwardedRef.current = node;
      }
    };

    useEffect(() => {
      setFilled(innerRef.current?.value !== '');
    }, []);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(e);
      setFilled(e.currentTarget.value.trim() !== '');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      setFilled(e.currentTarget.value.trim() !== '');
    };

    return (
      <Parent
        className={className}
        {...(filled ? { 'data-filled': true } : {})}
        {...(error ? { 'data-error': true } : {})}
      >
        <Input
          {...props}
          ref={combinedRef}
          onBlur={handleBlur}
          onChange={handleChange}
          as={asTag}
        />
        <Label>{label}</Label>
        {fieldRightElement && (
          <FieldRightElement>{fieldRightElement}</FieldRightElement>
        )}
        {error && <Error>{error.message}</Error>}
      </Parent>
    );
  }
);

export default FieldBox;
