import React from 'react';
import { useNavigate } from "react-router-dom";

import Header from '../Components/Blocks/Header/Header';
import Flex from '../Components/Blocks/Flex/Flex';
import Section from "../Components/Blocks/Section/Section";
import DarkSection from "../UI/Sections/Dark/DarkSection";
import Button from "../UI/Button/Button";

import { contacts, header } from "../Components/Content";

const Main = () => {
  const  navigate = useNavigate();
  return(
    <>
      <Header />
      <Section title='Мы занимаемся' list={[{title: 'Разработкой ПО для управления недвижимостью юридических лиц', description: ''}]} display='inline-block' listType='vertical' />
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
        <h2>Продукт разработан в партнерстве с ООО “ДДХ – Кадастр и Консалтинг”</h2>
      </DarkSection>
    </>
  )
};

export default Main;
