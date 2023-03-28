import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import MProjectCard from '../../ui/MProjectCard';
import hayotaLady from '../../../assets/hayotalady.png';

import classes from './Projects.module.scss';

interface IProps {  readonly onNevigateToMain: () => void;
}

const ProjectsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <>
      <button onClick={props.onNevigateToMain} className={classes['button'] }><img src={hayotaLady} alt="logo" className={classes['hayotaLady']}/></button>
      <section className={classes['container']}>
        <h1 className={classes['mainTitle']}>PROJECTS</h1>

        <ScrollContainer
          hideScrollbars
          nativeMobileScroll
          className={classes['projecstContainer']}
        >
          <MProjectCard
            projectLink="https://spirng-protfolio-frontend-production.vercel.app/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/IsZNmSv.jpg"
            projectTitle="Spring Portfolio"
          />

          <MProjectCard
            projectLink="https://hayota-site-frontend.vercel.app/"
            projectDesc="2023"
            projectImageLocation="https://i.imgur.com/GWeqlV3.jpg"
            projectTitle="Hayota Portfolio"
          />
          
          <MProjectCard
            projectLink="https://exlint.io/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/L0Ce85P.jpg"
            projectTitle="Exlint Landing Page"
          />
          
        </ScrollContainer>
      </section>
    </>
  );
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
