import Projects from '../components/containers/Projects';
import React from 'react';

interface IProps {}

const MainPage: React.FC<IProps> = () => {
  return <Projects />;
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
