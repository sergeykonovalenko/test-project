import { ReactElement } from 'react';
import styled from 'styled-components';
import { ModalContentProps } from '@/components/Modal/ModalContent/ModalContent.props';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const ModalContentBox = styled.div`
  width: 560px;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
`;

const ModalContent = ({
  children,
  ...props
}: ModalContentProps): ReactElement => {
  return (
    <ModalContainer>
      <ModalContentBox>{children}</ModalContentBox>
    </ModalContainer>
  );
};

export default ModalContent;
