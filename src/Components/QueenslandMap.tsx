import React from 'react';
import style from "./style.module.css";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow"
import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

const WAVE_BOUY_LOCATIONS: {[key: string]: { lat: number, lng: number }} = {
  BRISBANE: {
    lat: -27.487167,
    lng: 153.6290951
  },
  GOLD_COAST: {
    lat: -27.9649000000,
    lng: 153.4409500000
  },
  PALM_BEACH: {
    lat: -28.0998670000,
    lng: 153.4863670000
  },
  BILINGA: {
    lat: -28.1430670000,
    lng: 153.5119670000
  },
  TWEED_HEADS: {
    lat: -28.1770830000,
    lng: 153.5763330000
  }
};

export interface QueenslandMapProps {
};

const QueenslandMap: React.FC<QueenslandMapProps> = () => {
  return (
    <div className={style.mapWrapper}>
      <APIProvider apiKey={API_KEY}>
        <Map
          mapId={"feda38288ac97ddd"}
          defaultZoom={10}
          defaultCenter={{
            lat: -27.816671391528104,
            lng: 153.4720382693691
        }} // hardcoded to centre middle of Queensland wave bouy locations
          gestureHandling={'greedy'}
          onClick={() => {}}
          clickableIcons={false}
          disableDefaultUI
        >
          {Object.keys(WAVE_BOUY_LOCATIONS).map((location: string, index) => (
            <MarkerWithInfoWindow 
              position={WAVE_BOUY_LOCATIONS[location]} 
              index={index} 
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}

export default QueenslandMap;