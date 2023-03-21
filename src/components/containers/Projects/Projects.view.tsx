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
      <section className={classes['container']}>
        <h1 className={classes['mainTitle']}>Projects</h1>

        <ScrollContainer
          hideScrollbars
          nativeMobileScroll
          className={classes['projecstContainer']}
        >
          <MProjectCard
            projectLink="https://spirng-protfolio-frontend-production.vercel.app/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/HB3BnSx.jpg"
            projectTitle="Hayota Lady"
          />

          <MProjectCard
            projectDesc="2022"
            projectImageLocation="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            projectTitle="Hayota Lady"
          />
          <MProjectCard
            projectDesc="2022"
            projectImageLocation="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            projectTitle="Hayota Lady"
          />
          <MProjectCard
            projectDesc="2022"
            projectImageLocation="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            projectTitle="Hayota Lady"
          />
          <MProjectCard
            projectDesc="2022"
            projectImageLocation="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            projectTitle="Hayota Lady"
          />
          <MProjectCard
            projectDesc="2022"
            projectImageLocation="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            projectTitle="Hayota Lady"
          />
        </ScrollContainer>
      </section>
      <button onClick={props.onNevigateToMain} className={classes['button'] }><img src={hayotaLady} alt="logo" className={classes['hayotaLady']}/></button>
    </>
  );
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
