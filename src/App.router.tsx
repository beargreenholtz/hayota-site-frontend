
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { SwitchTransition, Transition } from 'react-transition-group';
// import { useLocation } from 'react-router-dom';


interface IProps {}

const Main = React.lazy(() => import('./pages/Main'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const AppRouter: React.FC<IProps> = () => {
    // const location = useLocation();



  return (
    
      <Routes key={location.pathname} location={location}>
        <Route path="" element={<Main />} />
        <Route path="/projects" element={<Projects />}  />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />}  />
      </Routes>
    
  );
};

AppRouter.displayName = 'AppRouter';
AppRouter.defaultProps = {};

export default React.memo(AppRouter);
