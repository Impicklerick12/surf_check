import React, { useCallback, useState } from 'react';
import style from "./style.module.css";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow"
import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';
import { QLD_SURF_SPOTS } from "../data/QLDSurfSpots";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

export interface QueenslandMapProps {
};

const QueenslandMap: React.FC<QueenslandMapProps> = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const handleMapOnClick = useCallback(
    (args: any) => {
      setSelectedLocation(null);
      console.log(args);
    },
    []
  )
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
          onClick={handleMapOnClick}
          clickableIcons={false}
          disableDefaultUI
        >
          {Object.keys(QLD_SURF_SPOTS).map((location: string, index) => (
            <MarkerWithInfoWindow
              index={index}
              location={location}
              position={QLD_SURF_SPOTS[location]}
              isSelected={location === selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}

export default QueenslandMap;