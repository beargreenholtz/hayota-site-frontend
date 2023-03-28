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
      <button onClick={props.onNevigateToMain} className={classes['button'] }><img src={hayotaLady} alt="logo" className={classes['hayotaLady']}/></button>

        <h1 className={classes['mainTitle']}>HAYOTA</h1>
        <div className={classes['infoContainer']}>
          <div className={classes['companyInfo']}>
            <p>
            At <span>HAYOTA</span>, we're a small but mighty web design and development studio that's all about creativity, innovation, and a touch of quirkiness. 
We're the kind of team that believes in pushing boundaries, exploring new ideas, and taking risks that lead to stunning results.



            </p>
            <p>
         We're not your average web development firm. We're a group of passionate designers,
and developers who love nothing more than bringing ideas to life in unique and unexpected ways, always striving to stay ahead of the curve.
            </p>
            <p>
            So if you're looking for a web design and development partner that's not afraid to take risks and push boundaries, then look no further than <span>HAYOTA</span>. We're here to help you stand out in a crowded digital landscape and make your mark on the world.
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
                abamirbs11@gmail.com
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
    </>
  );
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
