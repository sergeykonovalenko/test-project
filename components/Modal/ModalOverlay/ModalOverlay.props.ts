import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ModalOverlayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClose: () => void;
}
