import React from 'react';
import {header, infoHeader} from "../../Content";
import './header.sass';
import {useNavigate} from "react-router-dom";

interface IHeader {
  type?: 'index' | 'not'
}

const Header = ({type = 'not'}: IHeader) => {
  const navigate = useNavigate();
  if (type === 'index') return (
    <header className='index'>
      <nav>
        {header.nav.title}
        <button onClick={() => navigate('/')}>{header.nav.button.text}</button>
      </nav>
      <section>
        <div>
          <h1>{header.title}</h1>
        </div>
        <img className='img-header' src={header.image.src} alt={header.image.alt} />
      </section>
    </header>
  );

  return (
    <header className='side'>
      <nav>
        {header.nav.title}
      </nav>
      <section>
        <h1 className='green'>{infoHeader.title}</h1>
        <img className='img-header' src={infoHeader.image.src} alt={header.image.alt} />
      </section>
    </header>
  );

}

export default Header;