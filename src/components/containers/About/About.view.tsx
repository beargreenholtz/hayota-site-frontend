import React from 'react';

import hayotaLady from '../../../assets/hayotalady.png';
import royTag from '../../../assets/tags/royTag.svg';
import amirTag from '../../../assets/tags/amirTag.svg';
import bearTag from '../../../assets/tags/bearTag.svg';

import classes from './About.module.scss';

interface IProps {
  readonly onNevigateToMain: () => void;
}

const AboutView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <>
      <section className={classes['container']}>
        <h1 className={classes['mainTitle']}>About</h1>
        <div className={classes['infoContainer']}>
          <div className={classes['companyInfo']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
              quam vitae vel urna, sit. Neque urna pellentesque tincidunt
              fringilla nibh nec. Eu enim enim, urna posuere pulvinar consequat
              justo. Mi, neque cursus pellentesque proin facilisis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
              quam vitae vel urna, sit. Neque urna pellentesque tincidunt
              fringilla nibh nec. Eu enim enim, urna posuere pulvinar consequat
              justo.
            </p>
          </div>
          <div className={classes['teamInfo']}>
            <div className={classes['teamInfo__container']}>
              <img
                src={royTag}
                alt="Roy Tag"
                className={classes['teamInfo__container--tag']}
              />
              <span className={classes['teamInfo__container--text']}>
                Roy Shiloh
              </span>
              <span className={classes['teamInfo__container--text']}>
                Product Designer
              </span>
              <span className={classes['teamInfo__container--text']}>
                shilohroyi@gmail.com
              </span>
            </div>

            <div className={classes['teamInfo__container']}>
              <img
                src={amirTag}
                alt="Amir Tag"
                className={classes['teamInfo__container--tag']}
              />
              <span className={classes['teamInfo__container--text']}>
                Amir Ben Shimol
              </span>
              <span className={classes['teamInfo__container--text']}>
                Web Developer
              </span>
              <span className={classes['teamInfo__container--text']}>
                abamirbs111@gmail.com
              </span>
            </div>
            <div className={classes['teamInfo__container']}>
              <img
                src={bearTag}
                alt="Bear Tag"
                className={classes['teamInfo__container--tag']}
              />
              <span className={classes['teamInfo__container--text']}>
                Bear Greenholtz
              </span>
              <span className={classes['teamInfo__container--text']}>
                Web Developer
              </span>
              <span className={classes['teamInfo__container--text']}>
                beargreenholtz@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <button onClick={props.onNevigateToMain} className={classes['button'] }><img src={hayotaLady} alt="logo" className={classes['hayotaLady']}/></button>
    </>
  );
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
