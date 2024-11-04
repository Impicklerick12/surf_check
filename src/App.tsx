import * as React from 'react';
import style from "./style.module.css";
import Queensland from './Components/Queensland';

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <Queensland />
    </div>
  )
}

export default App
