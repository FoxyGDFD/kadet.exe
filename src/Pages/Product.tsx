import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Blocks/Header/Header';
import Section from "../Components/Blocks/Section/Section";
import {actInfo, prodInfo, map, analytic, notifications, mImage} from "../Components/Content";

import '../Components/Blocks/section.sass';

const Product = (): React.ReactElement => {
  
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    const checkReloadHandler = () => {
      const reloading = sessionStorage.getItem("reloading");
      if (reloading === "false") {
        navigate('/');
        console.log('aAAAAAAA');
        sessionStorage.setItem("reloading", "true");
      } else {
        sessionStorage.setItem("reloading", "false");
        console.log('a');
      }
    }

    checkReloadHandler();
  }, []);


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
