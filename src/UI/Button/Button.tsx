import React from 'react';
import './button.sass';

interface IButton {
  className?: string,
  type?: string,
  onClick?: React.EventHandler<any>,
  children: string
}

function Button({className, type, onClick, children}: IButton) {

  const [hover, setHover] = React.useState<boolean>(false);
  const [src, setSrc] = React.useState<string>('/btn-arrow-black.svg');

  React.useEffect(() => hover ?
      setSrc('/btn-arrow-white.svg')
    : setSrc('/btn-arrow-black.svg')
  , [hover])

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={type + ' ' + className}
      type='button'
      onClick={onClick}
    >
      <div>
        <span>{children}</span>
        <img className='circle' src={src} alt="" />
      </div>
    </button>
  );
}

export default Button;