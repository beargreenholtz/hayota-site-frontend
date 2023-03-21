import React from 'react';
import { useNavigate } from 'react-router-dom';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
  const nevigate = useNavigate();
  const onNevigateToMain = () => nevigate('/');

  return <AboutView onNevigateToMain={onNevigateToMain}/>;
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
