import React from 'react';
import styled from 'styled-components';
import {
  CenteredFlex,
  CenteredFlexWithSpacing,
  VerticallyCenteredFlexWithSpaceBetween,
} from 'app/typography/flex';
import { Tab } from 'app/constants/tab';
import { mainBlack } from 'app/themes/colors';
import { Header, Span } from 'app/typography/text';
import Logo from 'app/icons/logo.svg';
import { ReactComponent as SoupIcon } from '../../icons/bowl.svg';
import { ReactComponent as OrderIcon } from '../../icons/mall-bag.svg';
import { ReactComponent as CalendarIcon } from '../../icons/calendar.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { Route } from '../../constants/route';

export function Toolbar() {
  return (
    <ToolbarComponent>
      <Tabs spacing={'140px'}>
        <LogoImage />
        <CenteredFlexWithSpacing spacing={'60px'}>
          <TabItem tab={Tab.Menu} />
          <TabItem tab={Tab.Order} />
        </CenteredFlexWithSpacing>
      </Tabs>
      <CenteredFlexWithSpacing spacing={'0.5rem'}>
        <CalendarIcon /> <Today>Понедельник 26.04</Today>
      </CenteredFlexWithSpacing>
    </ToolbarComponent>
  );
}

const ToolbarComponent = styled(VerticallyCenteredFlexWithSpaceBetween)`
  width: 100%;
  margin-bottom: 4rem;
  align-items: flex-end;
`;

const Tabs = styled(CenteredFlexWithSpacing)`
  align-items: flex-end;
`;

const LogoImage = styled.div`
  background: url(${Logo});
  height: 109px;
  width: 222px;
`;

const Today = styled(Span)`
  font-size: 22px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0.045em;
  text-align: center;
`;

const TabItem = (props: { tab: Tab }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <CenteredFlexWithSpacing
      onClick={() => history.push(props.tab === Tab.Menu ? '/' : '/order')}
      spacing={'9px'}
    >
      {props.tab === Tab.Menu && <SoupIcon />}
      {props.tab === Tab.Order && <OrderIcon />}
      <TabItemComponentText isSelected={Route[props.tab] === location.pathname}>
        <Header color={mainBlack}>{props.tab}</Header>
      </TabItemComponentText>
    </CenteredFlexWithSpacing>
  );
};

const TabItemComponentText = styled(CenteredFlex)<{ isSelected: boolean }>`
  padding-bottom: 6px;
  padding-left: 3px;
  padding-right: 3px;
  ${props => props.isSelected && 'border-bottom: 1px solid #0079c2'};
`;
