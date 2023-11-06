import { ModalProps } from '@/components/Modal/Modal.props';
import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';

const ModalParent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  ...props
}: ModalProps): ReactElement => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return <ModalParent>{children}</ModalParent>;
};

export default Modal;
