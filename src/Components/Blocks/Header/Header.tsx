import React from 'react';
import {useNavigate} from "react-router-dom";
import {header, infoHeader} from "../../Content";
import './header.sass'

import Button from "../../../UI/Button/Button";

interface IHeader {
  type?: 'index' | 'not'
}

const Header = ({type = 'not'}: IHeader) => {
  const navigate = useNavigate();
  if (type === 'index') return (
    <header className='index'>
      <nav>{header.nav}</nav>
      <section>
        <h1>{header.title}</h1>
        <h3 className='white'>{header.description}</h3>
        <Button type='text' onClick={(): void => navigate('/info/')}>{header.button.text}</Button>
        <img className='img-header' src={header.image.src} alt={header.image.alt} />
      </section>
    </header>
  );

  return (
    <header>
      <nav>{infoHeader.nav}</nav>
      <section>
        <h1 className='black'>{infoHeader.title}</h1>
        <h3 className='blue'>{infoHeader.description}</h3>
      </section>
    </header>
  );

}

export default Header;