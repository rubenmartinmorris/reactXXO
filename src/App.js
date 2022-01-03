import './App.css';
import { BePop } from './components/BePop';
import { Menu } from './components/Menu';
import { Xxo } from './components/Xxo';
import { useState } from 'react';

function App() {
  const allProjects = [<Xxo />, <BePop />];
  const [activeProject, setActiveProject] = useState(0);
  return (
    <div className='App'>
      <Menu setActiveProject={setActiveProject} />
      {allProjects[activeProject]}
    </div>
  );
}

export default App;
