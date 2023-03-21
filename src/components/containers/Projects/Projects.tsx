import React from 'react';
import { useNavigate } from 'react-router-dom';

import ProjectsView from './Projects.view';

interface IProps {}

const Projects: React.FC<IProps> = () => {
  const nevigate = useNavigate();
  const onNevigateToMain = () => nevigate('/');
  
  return <ProjectsView onNevigateToMain={onNevigateToMain}/>;
};

Projects.displayName = 'Projects';
Projects.defaultProps = {};

export default React.memo(Projects);
