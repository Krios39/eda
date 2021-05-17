import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

export interface BaseModalProps extends ReactModal.Props {
  children?: React.ReactNode;
  className?: string;
}

export function enableBodyOverflow() {
  document.body.classList.remove(overflowHiddenClass);
}

export function disableBodyOverflow() {
  document.body.classList.add(overflowHiddenClass);
}

export function BaseModal(props: BaseModalProps) {
  useEffect(() => {
    if (props.isOpen) {
      disableBodyOverflow();
    } else {
      enableBodyOverflow();
    }
    return () => {
      enableBodyOverflow();
    };
  }, [props.isOpen]);

  return (
    <ReactModal {...props} className={props.className}>
      {props.children}
    </ReactModal>
  );
}

export const overflowHiddenClass = 'overflow_hidden';
