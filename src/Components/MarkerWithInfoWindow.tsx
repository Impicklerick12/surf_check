import React, { useState, useCallback } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { qldSurfSpotAdapter } from "../data/QLDSurfSpots";

export interface MarkerWithInfoWindowProps {
  location: string,
  position: { lat: number; lng: number },
  index: number,
  isSelected: boolean,
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | null>>
}

const MarkerWithInfoWindow: React.FC<MarkerWithInfoWindowProps> = ({
  location,
  position,
  index,
  isSelected,
  setSelectedLocation
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const handleMarkerClick = useCallback(
    () => setSelectedLocation(location),
    []
  );
  const handleClose = useCallback(() => setSelectedLocation(null), []);

  return (
    <div key={index}>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      />
      {isSelected && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          {/* WAVE LOCATION SNAPSHOT DATA HERE */}
          <h2>{qldSurfSpotAdapter[location]}</h2>
          <p>Some arbitrary html to be rendered into the InfoWindow.</p>
        </InfoWindow>
      )}
    </div>
  );
};

export default MarkerWithInfoWindow;