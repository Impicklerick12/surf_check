import * as React from 'react';
import style from "./style.module.css";
import WaveLocation from "./Components/WaveLocation";
import { WaveLocationProps } from './types/WaveLocationProps'; 

const App: React.FC = () => {
  const [waveData, setWaveData] = React.useState<WaveLocationProps[]>([]);
  const [offset, setOffset] = React.useState(0);
  const limit = 100; // Number of records to fetch

  const fetchWaveData = (offset: number) => {
    const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c';
    const url = `https://data.qld.gov.au/api/3/action/datastore_search?resource_id=${resourceID}&limit=${limit}&offset=${offset}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWaveData(prevWaveData => [...prevWaveData, ...data.result.records]);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  const handleLoadMore = () => {
    setOffset(prevOffset => prevOffset + limit)
  }

  React.useEffect(() => {
    fetchWaveData(offset)
  }, [offset]);

  return (
    <div className={style.App}>
      <div className={style.waveDataWrapper}>
        {waveData.map((record: WaveLocationProps) => (
          <WaveLocation { ...record } />
        ))}
      </div>
      <button onClick={() => handleLoadMore()}>Fetch More</button>
    </div>
  )
}

export default App
