import Contact from '../components/containers/Contact';
import React from 'react';

interface IProps {}

const MainPage: React.FC<IProps> = () => {
  return <Contact />;
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
