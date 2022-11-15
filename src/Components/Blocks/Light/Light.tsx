import React from 'react';
import ListItemWithDescription from "../../ListItemWithDescription/ListItemWithDescription";
import LightSection from "../../../UI/Sections/Light/LightSection";

interface IItem {
  title: string,
  description?: string
}

interface ILight{
  title: string,
  list: IItem[],
  listType?: 'horizontal' | 'vertical'
  image?: {
    src: string
    alt: string
  }
  display?: 'block' | 'inline-block'
}

function Light({title, list, listType = 'horizontal', image, display = 'block'}: ILight) {
  return (
    <LightSection display={display}>
      <h2>{title}</h2>
       <div className={image ? "img-list" : ''}>
         {image && <img src={image.src} alt={image.alt} />}
         <ul className={listType ==='horizontal' ? list.length > 4 ? 'row-list wrap' : 'row-list' : list.length > 4 ? 'column-list wrap' : 'column-list'}>
          {list.map(({title, description}:IItem, index) => <ListItemWithDescription key={index} title={title} description={description} />)}
         </ul>
      </div>
    </LightSection>
  );
}

export default Light;