import React from 'react';

import FooterStyled from '../../components/FooterStyled';
import Navbar from '../../components/NavBar';
import navigation from '../navigation';
import styled from 'styled-components';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainContentWrapper = styled.main`
  flex: 1;
  padding: 12px;
`;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <DefaultLayoutWrapper>
      <Navbar navigation={navigation} />
      <MainContentWrapper>{children}</MainContentWrapper>
      <FooterStyled />
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
