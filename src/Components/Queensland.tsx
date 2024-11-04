import * as React from 'react';
import style from "./style.module.css";
import { WaveDataProps } from 'types/WaveDataProps';
import WaveData from './WaveData';
import { formatDate } from "../WaveDataUtils";

export interface QueenslandProps {
}

const Queensland: React.FC<QueenslandProps> = () => {
  const [sites, setSites] = React.useState([]);
  const [selectedSite, setSelectedSite] = React.useState<string | null>(null);
  const [selectedSiteData, setSelectedSiteData] = React.useState<WaveDataProps[]>([]);

  const fetchUniqueSites = async () => {
    const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c';
    const sql = encodeURIComponent(`SELECT DISTINCT "Site" FROM "${resourceID}" ORDER BY "Site" ASC`);
    const url = `https://data.qld.gov.au/api/3/action/datastore_search_sql?sql=${sql}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const uniqueSites = data.result.records.map((record: { Site: string }) => {
        let site = record.Site;
        if (site.endsWith("Mk4")) site = site.slice(0, -3);
        return site;
      });
      setSites(uniqueSites)
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const fetchSelectedSiteData = async(site: string) => {
    const resourceID = '2bbef99e-9974-49b9-a316-57402b00609c';
    const sql = encodeURIComponent(`SELECT * FROM "${resourceID}" WHERE "Site"='${site}' ORDER BY "DateTime" DESC`);
    const url = `https://data.qld.gov.au/api/3/action/datastore_search_sql?sql=${sql}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const waveData = data.result.records.map((record: WaveDataProps) => ({
        ...record,
        DateTime: formatDate(record.DateTime)
      }));
      console.log(waveData.length)
      setSelectedSiteData(waveData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  React.useEffect(() => {
    fetchUniqueSites();
  }, []);
  
  React.useEffect(() => {
    if (selectedSite) {
      fetchSelectedSiteData(selectedSite);
    };
  }, [selectedSite]);

  return (
    <div>
      <div>QUEENSLAND</div>
      {sites.map((site: string) => (
        <div
          className={style.site}
          onClick={() => setSelectedSite(site)}
        >
          {site}
        </div>
      ))}
      {(selectedSite && selectedSiteData.length > 0) && (
        <div className={style.selectedSiteWrapper}>
          <div>{selectedSite?.toUpperCase()}</div>
          <div className={style.waveDataWrapper}>
              {selectedSiteData.map((record: WaveDataProps) => (
                <WaveData { ...record } />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Queensland;