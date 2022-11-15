import React from 'react';

interface ILightSection {
  children?: React.ReactNode,
  display?: 'block' | 'inline-block',
}

const LightSection = ({children, display = 'block'}: ILightSection) => {
  return (
    <section className={display === 'block'? 'card' : 'card inline'}>
      {children}
    </section>
  );
}

export default LightSection;