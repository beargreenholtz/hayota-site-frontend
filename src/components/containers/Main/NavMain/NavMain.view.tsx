import React from 'react';
// import { Link } from 'react-router-dom';

import classes from './NavMain.module.scss';

interface IProps {
  readonly onNevigateToProjects: () => void;
  readonly onNevigateToAbout: () => void;
  readonly onNevigateToContact: () => void;
}

const NavMainView: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <div className={classes['buttons']}>
      <button
        onClick={props.onNevigateToProjects}
        className={classes['button']}
      >
        Projects
      </button>
      <button onClick={props.onNevigateToAbout} className={classes['button'] }>ABOUT</button>
      <button onClick={props.onNevigateToContact} className={classes['button']}>CONTACT</button>
    </div>
  );
};

NavMainView.displayName = 'NavMainView';
NavMainView.defaultProps = {};

export default React.memo(NavMainView);
