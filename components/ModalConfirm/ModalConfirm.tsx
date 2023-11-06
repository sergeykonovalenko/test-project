import { ReactElement } from 'react';
import { ModalConfirmProps } from '@/components/ModalConfirm/ModalConfirm.props';
import Modal from '@/components/Modal/Modal';
import ModalOverlay from '@/components/Modal/ModalOverlay/ModalOverlay';
import ModalContent from '@/components/Modal/ModalContent/ModalContent';
import Button from '@/components/Button/Button';
import styled from 'styled-components';

const ButtonsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const ModalConfirm = ({
  onClose,
  ...props
}: ModalConfirmProps): ReactElement => {
  return (
    <Modal onClose={onClose} {...props}>
      <ModalOverlay onClose={onClose} />
      <ModalContent>
        <ButtonsBox>
          <Button onClick={() => onClose()}>Yes</Button>
          <Button onClick={() => onClose()}>No</Button>
        </ButtonsBox>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirm;
