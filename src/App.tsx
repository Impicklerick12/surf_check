import * as React from 'react';
import style from "./style.module.css";
import Queensland from './Components/Queensland';
import QueenslandMap from './Components/QueenslandMap';

const App: React.FC = () => {
  return (
    <div className={style.App}>
      {/* <Queensland /> */}
      <QueenslandMap />
    </div>
  )
}

export default App
