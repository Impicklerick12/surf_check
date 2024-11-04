import * as React from 'react';
import { WaveDataProps } from 'types/WaveDataProps';
import style from "./style.module.css";

const WaveData: React.FC<WaveDataProps> = ({
  _id,
  // Site,
  // SiteNumber,
  // Seconds,
  DateTime,
  // Latitude,
  // Longitude,
  Hsig,
  Hmax,
  Tp,
  Tz,
  SST,
  Direction
}) => {
  return (
    <div key={_id} className={style.locationWrapper}>
      {/* <h2>Site: {Site}</h2>
      <p>ID: {_id}</p>
      <p>Site Number: {SiteNumber}</p>
      <p>Timestamp: {Seconds}</p> */}
      <p>DateTime: {DateTime}</p>
      {/* <p>Latitude: {Latitude}</p>
      <p>Longitude: {Longitude}</p> */}
      <p>Significant Wave Height (Hsig): {Hsig}</p>
      <p>Max Wave Height (Hmax): {Hmax}</p>
      <p>Peak Period (Tp): {Tp}</p>
      <p>Mean Period (Tz): {Tz}</p>
      <p>Sea Surface Temperature (SST): {SST}</p>
      <p>Wave Direction: {Direction}</p>
    </div>
  )
}

export default WaveData;