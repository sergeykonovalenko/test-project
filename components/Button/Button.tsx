import { ButtonProps } from '@/components/Button/Button.props';
import styled from 'styled-components';

const Button = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  max-width: 100%;
  padding: 17.5px 24px;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;
  text-align: center;
  white-space: normal;
  word-wrap: normal;
  color: #fff;
  background-color: var(--colors-main--light);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    background-color: var(--colors-main);
  }

  &:active {
    background-color: var(--colors-main--darken);
  }
`;

export default Button;
