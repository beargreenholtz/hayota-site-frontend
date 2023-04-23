import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import MProjectCard from '../../ui/MProjectCard';
import hayotaLady from '../../../assets/hayotalady.png';
import { project } from '../../../data/project'

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
          {project.map((project, key) => (
						    <MProjectCard
              key={key} projectImageLocation={project.image} projectTitle={project.title} projectDesc={project.description} projectLink={project.link}							
							/>
						))}



        </ScrollContainer>

        <div className={classes['projecstContainerMobile']}>
        {project.map((project, key) => (
						    <MProjectCard
              key={key} projectImageLocation={project.image} projectTitle={project.title} projectDesc={project.description} projectLink={project.link}							
							/>
						))}


        </div>
      </section>
    </>
  );
};

ProjectsView.displayName = 'ProjectsView';
ProjectsView.defaultProps = {};

export default React.memo(ProjectsView);
