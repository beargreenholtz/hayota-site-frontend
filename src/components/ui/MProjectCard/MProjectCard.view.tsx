import React from 'react';
import Tilt from 'react-parallax-tilt';

import classes from './MProjectCard.module.scss';

interface IProps {
  readonly projectTitle: string;
  readonly projectDesc: string;
  readonly projectImageLocation: string;
  readonly projectLink?: string | undefined;
}

const MProjectCardView: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <div className={classes['container']}>
      <a target="_blank" href={props.projectLink}>
        <Tilt
          glareEnable
          glareBorderRadius="10"
          scale={1.05}
          gyroscope
          glarePosition="all"
          glareMaxOpacity={0.2}
        >
          <img
            src={props.projectImageLocation}
            alt="project image"
            className={classes['projectImage']}
          />
        </Tilt>
        <div className={classes['projectTitleContainer']}>
          <h3 className={classes['projectTitle']}>{props.projectTitle}</h3>
          <p className={classes['description']}>{props.projectDesc}</p>
        </div>
      </a>
    </div>
  );
};

MProjectCardView.displayName = 'MProjectCardView';
MProjectCardView.defaultProps = {};

export default React.memo(MProjectCardView);
