import React from 'react';
import ListItemWithDescription from "../../ListItemWithDescription/ListItemWithDescription";
import DarkSection from "../../../UI/Sections/Dark/DarkSection";

interface IItem {
  title: string,
  description?: string
}

interface ILight{
  title: string,
  list?: IItem[],
  listType?: 'horizontal' | 'vertical',
  image?: {
    src: string
    alt: string
  },
  desctiption?: string,
  display?: 'block' | 'inline-block'
  reverse?: boolean
}

function Section({title, list = [], listType = 'horizontal', image, desctiption = '', display = 'block', reverse = false}: ILight) {
  const [className, setClassName] = React.useState<string>('');

  React.useEffect(() => {
    setClassName(image ? reverse ? "img-list reverse" : "img-list" : reverse ? " reverse" : '')
  }, [])


  return (
    <DarkSection display={display}>
      <h2>{title}</h2>
      {desctiption && <h5>{desctiption}</h5>}
       <div className={className}>
         {image && <img src={image.src} alt='' />}
         <ul className={listType ==='horizontal' ? list.length > 4 ? 'row-list wrap' : 'row-list' : list.length > 4 ? 'column-list wrap' : 'column-list'}>
          {list?.map(({title, description}:IItem, index) => <ListItemWithDescription size={list?.length > 1 ? 'multiple' : 'single'} key={index} title={title} description={description} />)}
         </ul>
      </div>
    </DarkSection>
  );
}

export default Section;