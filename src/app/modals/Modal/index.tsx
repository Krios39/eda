import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { BaseModal, BaseModalProps } from '../BaseModal';
import {
  modalBackground,
  modalBackgroundOutsideDefault,
} from '../../constants/colors';
import { modalZIndex } from 'app/constants/zIndex';

export const Modal = (
  props: BaseModalProps & {
    children: ReactNode;
    onClose?: () => void;
    loading?: boolean;
    className?: string;
    backgroundOutside?: string;
    background?: string;
    padding?: string;
    header?: ReactNode;
  },
) => {
  function onClose() {
    if (props.onClose) {
      props.onClose();
    }
  }

  return (
    <ModalComponent
      style={{
        overlay: {
          backgroundColor: props.backgroundOutside
            ? props.backgroundOutside
            : modalBackgroundOutsideDefault,
          zIndex: modalZIndex,
        },
      }}
      className={props.className}
      isOpen={props.isOpen}
      onRequestClose={onClose}
      padding={props.padding}
      background={props.background}
    >
      {props.children}
    </ModalComponent>
  );
};

const ModalComponent = styled(BaseModal)<{
  padding?: string;
  background?: string;
}>`
  background: ${props =>
    props.background ? props.background : modalBackground};

  border-radius: 16px;

  padding: ${props => (props.padding ? props.padding : '2rem 2.5rem')};

  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;

  outline: none;

  user-select: none;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2), 0px 4px 100px rgba(0, 0, 0, 0.05);
  border: 1px solid #c4c4c4;
`;
