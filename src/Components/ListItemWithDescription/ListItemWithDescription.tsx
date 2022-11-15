import React from 'react';

interface ITextWithDescription{
  type?: 'dark' | 'light',
  title: string,
  description?: string
}

const ListItemWithDescription = ({type = 'light', title, description}: ITextWithDescription) => {
  return (
    <li>
      {type === 'light'? <h3>{title}</h3> : <h4>{title}</h4>}
      {description && <p className={type === 'light'? '' : 'dark'}>{description}</p>}
    </li>
  );
}

export default ListItemWithDescription;