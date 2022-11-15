import React from 'react';
import Header from '../Components/Blocks/Header/Header';
import '../Components/Blocks/section.sass'
import Dark from "../Components/Blocks/Dark/Dark";
import Light from "../Components/Blocks/Light/Light";
import {actInfo, manageBlock} from "../Components/Content";

const Main = (): React.ReactElement => {
  return (
    <>
      <Header type='index'/>
      <Light title={actInfo.title} list={actInfo.list} />
      <Light title={manageBlock.title} list={manageBlock.list} image={manageBlock.image} listType='vertical' />
      <Dark />
    </>
  );
}

export default Main;