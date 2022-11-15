import React from 'react';

const DarkSection = ({children}: any) => {
  return (
    <section className='dark'>
      <div className="card">
        {children}
      </div>
    </section>
  );
}

export default DarkSection;