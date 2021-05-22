import React, { ReactNode, useEffect } from 'react';
import { CenteredFlex, ColumnCenteredFlex } from '../../typography/flex';
import { Toolbar } from '../Toolbar';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { profileSlice } from 'store/profile/slice';
import { selectIsLoading } from '../../../store/profile/selectors';
import { Loader } from '../Loader';

export function Page(props: { children: ReactNode; className?: string }) {
  // @ts-ignore
  let { id } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(profileSlice.actions.loadProfileId(id));
  }, []);

  return (
    <PageComponent className={props.className}>
      <Toolbar />
      {isLoading ? <Loader /> : props.children}
    </PageComponent>
  );
}

const PageComponent = styled(ColumnCenteredFlex)`
  width: 100%;
  height: 100%;
  padding: 0 13%;
`;
