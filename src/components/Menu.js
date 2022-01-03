import './menu.css';
export const Menu = ({ setActiveProject }) => {
  return (
    <header>
      <div className='menubar'>
        <button className='btn' id='menu-btn'>
          <strong>{'Menu'}</strong>
        </button>
        <button
          className='btn'
          onClick={() => {
            setActiveProject(0);
          }}
        >
          <strong>{'<'}</strong>
        </button>
        <button
          className='btn'
          onClick={() => {
            setActiveProject(1);
          }}
        >
          <strong>{'>'}</strong>
        </button>
      </div>
    </header>
  );
};
