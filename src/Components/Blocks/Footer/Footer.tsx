import React from 'react';
import {address, contacts, footer, mainHeader} from "../../Content";
import './footer.sass';
import Section from "../Section/Section";

function Footer() {
  const [hover, setHover] = React.useState<boolean>(false);
  const [className, setClassName] = React.useState<string>('circle-black-black min');
  const [modal, setModal] = React.useState<boolean>(false);

  React.useEffect(() => hover ?
      setClassName('circle-black max')
      : setClassName('circle-black min')
    , [hover])

  return (
    <>
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
                className='circle'
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
          <li><p onClick={() => setModal(!modal)}>{footer.linkList.info}</p></li>
          <li>{footer.linkList.product}</li>
          <li><a target='_blank' href={footer.linkList.designer.src}>{footer.linkList.designer.text}</a></li>
        </ul>
      </footer>
      <dialog style={{display: modal ? "flex" : 'none'}}>
        <article className='container'>
          <div className="title">
            <h2>{mainHeader.title}</h2>
            <span onClick={() => setModal(!modal)} />
          </div>
          <div className='main-aside'>
            <Section title={contacts.title} list={contacts.list} display='inline-block' listType='vertical' />
            <Section title={address.title} list={address.list} display='inline-block' listType='vertical' />
          </div>
        </article>
      </dialog>
    </>
  );
}

export default Footer;