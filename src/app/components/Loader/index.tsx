import { Span } from 'app/typography/text';
import React from 'react';
import styled from 'styled-components';
import loader from '../../images/loader.svg';
import { ColumnCenteredFlexWithPadding } from '../../typography/flex';

export function Loader() {
  return (
    <LoaderComponent spacing={'42px'}>
      <LoaderImage />
      <WaitText>ПОДОЖДИТЕ, ПОЖАЛУЙСТА</WaitText>
    </LoaderComponent>
  );
}

const LoaderComponent = styled(ColumnCenteredFlexWithPadding)`
  height: calc(100vh - 109px - 64px);
`;

const LoaderImage = styled.div`
  height: 150px;
  width: 150px;
  background: url(${loader});
  animation: rotating 2.5s linear infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const WaitText = styled(Span)`
  font-size: 25px;
  font-weight: 300;
  line-height: 29px;
`;
