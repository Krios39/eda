import React, { ReactNode, useEffect } from 'react';
import { ColumnCenteredFlex } from '../../typography/flex';
import { Toolbar } from '../Toolbar';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { profileSlice } from 'store/profile/slice';

export function Page(props: { children: ReactNode; alignItems?: string }) {
  // @ts-ignore
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    dispatch(profileSlice.actions.loadProfileId(id));
  }, []);

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
