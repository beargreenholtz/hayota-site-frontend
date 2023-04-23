import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import MProjectCard from '../../ui/MProjectCard';
import hayotaLady from '../../../assets/hayotalady.png';

import classes from './Projects.module.scss';

interface IProps {
  readonly onNevigateToMain: () => void;
}

const ProjectsView: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <>
      <button onClick={props.onNevigateToMain} className={classes['button']}>
        <img src={hayotaLady} alt="logo" className={classes['hayotaLady']} />
      </button>
      <section className={classes['container']}>
        <h1 className={classes['mainTitle']}>PROJECTS</h1>

        <ScrollContainer
          hideScrollbars
          className={classes['projecstContainerWeb']}
        >
          <MProjectCard
            projectLink="https://spirng-protfolio-frontend-production.vercel.app/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/IsZNmSv.jpg"
            projectTitle="Spring Portfolio"
          />

          <MProjectCard
            projectLink="https://exlint.io/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/L0Ce85P.jpg"
            projectTitle="Exlint Landing Page"
          />

         <MProjectCard
            projectLink="https://vinyl-depository-landing-page.vercel.app/"
            projectDesc="2021"
            projectImageLocation="https://i.imgur.com/nZ6qXjs.png"
            projectTitle="Vinyl Depository"
          />
          
          <MProjectCard
            projectLink="https://seashell-app-3ar2i.ondigitalocean.app/"
            projectDesc="2023"
            projectImageLocation="https://i.imgur.com/OT5EMb5.png"
            projectTitle="Aviv Shiloh Portfolio"
          />


          <MProjectCard
            projectLink="https://royshiloh.com/"
            projectDesc="2023"
            projectImageLocation="https://i.imgur.com/34AlHtq.jpg"
            projectTitle="Roy Portfolio"
          />
        </ScrollContainer>

        <div className={classes['projecstContainerMobile']}>
        <MProjectCard
            projectLink="https://spirng-protfolio-frontend-production.vercel.app/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/IsZNmSv.jpg"
            projectTitle="Spring Portfolio"
          />

          <MProjectCard
            projectLink="https://exlint.io/"
            projectDesc="2022"
            projectImageLocation="https://i.imgur.com/L0Ce85P.jpg"
            projectTitle="Exlint Landing Page"
          />

         <MProjectCard
            projectLink="https://vinyl-depository-landing-page.vercel.app/"
            projectDesc="2021"
            projectImageLocation="https://i.imgur.com/nZ6qXjs.png"
            projectTitle="Vinyl Depository"
          />
          
          <MProjectCard
            projectLink="https://seashell-app-3ar2i.ondigitalocean.app/"
            projectDesc="2023"
            projectImageLocation="https://i.imgur.com/OT5EMb5.png"
            projectTitle="Aviv Shiloh Portfolio"
          />


          <MProjectCard
            projectLink="https://royshiloh.com/"
            projectDesc="2023"
            projectImageLocation="https://i.imgur.com/34AlHtq.jpg"
            projectTitle="Roy Portfolio"
          />

        </div>
      </section>
    </>
  );
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
