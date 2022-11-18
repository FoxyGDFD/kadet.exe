import React from 'react';
import Header from '../Components/Blocks/Header/Header';
import { header, } from "../Components/Content";
import DarkSection from "../UI/Sections/Dark/DarkSection";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Flex from '../Components/Blocks/Flex/Flex';

const Main = () => {
  const  navigate = useNavigate();
  return(
    <>
      <Header />
      <Flex title='Мы занимаемся' description='Разработкой ПО для управления недвижимостью юридических и физических лиц' />

      <DarkSection>
        <div>
          <h2>Наши продукты</h2>
          <div className="flex prod">
            <img src="/product-icon.svg" alt=""/>
            <div>
              <h4>Кадет – Моя недвижимость</h4>
              <p>Автоматизируйте управление и учет недвижимости компании</p><br/>
              <Button onClick={() => navigate(header.link.src)}>Подробнее</Button>
            </div>
          </div>
        </div>
      </DarkSection>
      <DarkSection>
        <div>
          <h2>ООО “ДДХ – Кадастр и Консалтинг”</h2>
          <div className="flex">
            <h3><i>Лидер</i> рынка кадастровых <br/> и сопутствующих услуг</h3>
            <h3><i>Сооснователь</i> компании</h3>
            </div>
          </div>
        </DarkSection>
    </>
  )
};

export default Main;