import React from 'react';
import {footer} from "../../Content";
import './footer.sass';

function Footer() {
  const [hover, setHover] = React.useState<boolean>(false);
  const [className, setClassName] = React.useState<string>('roll-black min');

  React.useEffect(() => hover ?
      setClassName('roll-black max')
      : setClassName('roll-black min')
    , [hover])

  return (
    <footer>
      <div className="card">
        <h2 className='white'>{footer.title}</h2>
        <address>
          <a href={footer.email.src}>
            {footer.email.text}
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <span
              className='roll'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            ></span>
            <span
              className={className}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            ></span>
          </div>
          </a>
        </address>
      </div>
        <div className="rolling-text">
          <strong>{footer.rollText}</strong>
        </div>
        <ul>
          <li><a href={footer.linkList.info.src}>{footer.linkList.info.text}</a></li>
          <li>{footer.linkList.product}</li>
          <li><a href={footer.linkList.designer.src}>{footer.linkList.designer.text}</a></li>
        </ul>
    </footer>
  );
}

export default Footer;