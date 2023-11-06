'use client';

import { ReactElement } from 'react';
import { ContainerProps } from './Container.props';
import styled from 'styled-components';

const Parent = styled.div`
  width: 100%;
  max-width: 688px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Container = ({ children, ...props }: ContainerProps): ReactElement => {
  return <Parent {...props}>{children}</Parent>;
};

export default Container;
