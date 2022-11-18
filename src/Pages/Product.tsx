import React from 'react';
import Header from '../Components/Blocks/Header/Header';
import Section from "../Components/Blocks/Section/Section";
import {actInfo, prodInfo, map, analytic, notifications, mImage} from "../Components/Content";

import '../Components/Blocks/section.sass'

const Product = (): React.ReactElement => {
  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <Header type='index'/>
      <Section title={prodInfo.title} desctiption={prodInfo.description} />
      <Section title={actInfo.title} list={actInfo.list} />
      <Section title={map.title} list={map.list} image={mImage.image} listType='vertical' />
      <Section title={analytic.title} list={analytic.list} image={analytic.image} listType='vertical' reverse />
      <Section title={notifications.title} list={notifications.list} image={notifications.image} listType='vertical' />
    </>
  );
}

export default Product;