import React from 'react';
import DarkSection from "../../../UI/Sections/Dark/DarkSection";

interface IFlex {
  title: string,
  description: string
}

function Flex({title, description}: IFlex) {
  return (
    <DarkSection>
      <div className="flex">
        <h2 style={{whiteSpace: 'nowrap'}}>{title}</h2>
        <h3>{description}</h3>
      </div>
    </DarkSection>
  );
}

export default Flex;