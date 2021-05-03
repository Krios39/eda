import React, { ReactNode } from 'react';
import { ColumnCenteredFlex } from '../../typography/flex';
import { Toolbar } from '../Toolbar';
import styled from 'styled-components';

export function Page(props: { children: ReactNode; alignItems?: string }) {
  return (
    <PageComponent alignItems={props.alignItems}>
      <Toolbar />
      {props.children}
    </PageComponent>
  );
}

const PageComponent = styled(ColumnCenteredFlex)<{ alignItems?: string }>`
  width: 100%;
  height: 100%;
  padding: 0 13%;
  ${props => props.alignItems && `align-items: ${props.alignItems}`}
`;
