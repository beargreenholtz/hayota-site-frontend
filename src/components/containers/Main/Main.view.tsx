import React from 'react';

import logo from '../../../assets/hayotalogospin.png';
import hayotaLady from '../../../assets/hayotalady.png';

import classes from './Main.module.scss';
import NavMain from './NavMain';

interface IProps {
  readonly onNevigateToMain: () => void;
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <section className={classes['container']}>
      <img src={logo} alt="logo" className={classes['logo']} />
      <NavMain />
      <button onClick={props.onNevigateToMain} className={classes['button'] }><img src={hayotaLady} alt="logo" className={classes['hayotaLady']}/></button>
    </section>
  );
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
