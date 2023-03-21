import React from 'react';

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

      <img
        src={props.projectImageLocation}
        alt="project image"
        className={classes['projectImage']}
      />
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
