import styled from 'styled-components';
import { ReactElement } from 'react';
import { ModalOverlayProps } from '@/components/Modal/ModalOverlay/ModalOverlay.props';

const Parent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalOverlay = ({
  onClose,
  ...props
}: ModalOverlayProps): ReactElement => {
  return <Parent {...props}></Parent>;
};
export default ModalOverlay;
