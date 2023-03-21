import React from 'react';

import { useNavigate } from 'react-router-dom';

import NavMainView from './NavMain.view';

interface IProps {}

const NavMain: React.FC<IProps> = () => {
  const nevigate = useNavigate();
  const onNevigateToProjects = () => nevigate('/projects');
  const onNevigateToAbout = () => nevigate('/about');
  const onNevigateToContact = () => nevigate('/contact');

  
  return <NavMainView onNevigateToProjects={onNevigateToProjects} onNevigateToAbout={onNevigateToAbout} onNevigateToContact={onNevigateToContact}/>;
};

NavMain.displayName = 'NavMain';
NavMain.defaultProps = {};

export default React.memo(NavMain);
