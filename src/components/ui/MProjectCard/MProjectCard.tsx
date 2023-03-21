import React from 'react';

import MProjectCardView from './MProjectCard.view';

interface IProps {
  readonly projectImageLocation: string;
  readonly projectTitle: string;
  readonly projectDesc: string;
  readonly projectLink?: string | undefined;
}

const MProjectCard: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>
) => {
  return (
    <MProjectCardView
      projectImageLocation={props.projectImageLocation}
      projectTitle={props.projectTitle}
      projectDesc={props.projectDesc}
      projectLink={props.projectLink}

    />
  );
};

MProjectCard.displayName = 'MProjectCard';
MProjectCard.defaultProps = {};

export default React.memo(MProjectCard);
