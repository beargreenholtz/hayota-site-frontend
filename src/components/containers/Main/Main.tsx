import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
  const nevigate = useNavigate();
  const onNevigateToMain = () => nevigate('/');

  
  return <MainView onNevigateToMain={onNevigateToMain}/>;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
