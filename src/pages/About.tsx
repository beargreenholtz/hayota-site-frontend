import About from '../components/containers/About';
import React from 'react';

interface IProps {}

const MainPage: React.FC<IProps> = () => {
  return <About />;
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
