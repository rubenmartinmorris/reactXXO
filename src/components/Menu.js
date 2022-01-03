import './menu.css';
export const Menu = () => {
  return (
    <header>
      <div className='menubar'>
        <button className='btn' id='menu-btn'>
          <strong>{'Menu'}</strong>
        </button>
        <button className='btn'>
          <strong>{'<'}</strong>
        </button>
        <button className='btn'>
          <strong>{'>'}</strong>
        </button>
      </div>
    </header>
  );
};
