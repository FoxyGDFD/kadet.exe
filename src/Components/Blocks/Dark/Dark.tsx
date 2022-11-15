import React from 'react';
import ListItemWithDescription from "../../ListItemWithDescription/ListItemWithDescription";
import DarkSection from "../../../UI/Sections/Dark/DarkSection";

function Dark() {
  return (
    <DarkSection>
      <h2>Продукт, полезный всем</h2>
      <div>
        <ul className="row-list" style={{gap: '228px'}}>
          <ListItemWithDescription type='dark' title={'Собственникам'} description={'Публикуйте предложения\n\nо продаже и сдаче жилья\n\n Вся информация о недвижимости концентрируется в одном месте\n\n Сделайте выгрузку информации для бухгалтерского учета'} />
          <ListItemWithDescription type='dark' title={'Обращения в Росеестр'} description={'Для регистрации прав собственности и получения возможности распоряжаться недвижимостью'} />
        </ul>
      </div>
  </DarkSection>
  );
}

export default Dark;