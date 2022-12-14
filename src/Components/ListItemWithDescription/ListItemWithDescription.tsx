import React from 'react';

interface ITextWithDescription{
  type?: 'dark' | 'light',
  title?: string,
  description?: string
  size: string
}

const ListItemWithDescription = ({type = 'light', size = 'multiple', title, description}: ITextWithDescription) => {

  return (
    <li className={size}>
      {title && type === 'light' && <h3>{title}</h3>}
      {title && type !== 'light' && <h4>{title}</h4>}
      {description && <p className={type === 'light'? '' : 'dark'}>{description}</p>}
    </li>
  );
}

export default ListItemWithDescription;