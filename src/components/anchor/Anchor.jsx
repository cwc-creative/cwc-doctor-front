import React from 'react';

const Anchor = ({name}) => {
  return <a href={`/${name}`} className="moto-anchor" name={name}></a>;
};

export default Anchor;
