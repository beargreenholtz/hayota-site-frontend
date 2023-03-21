import React from 'react';
import { useNavigate } from 'react-router-dom';

import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = () => {
  const nevigate = useNavigate();
  const onNevigateToMain = () => nevigate('/');

  return <ContactView onNevigateToMain={onNevigateToMain}/>;
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);
