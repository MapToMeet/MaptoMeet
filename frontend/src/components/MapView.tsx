import Map, { Marker, type MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";

function MapView() {
  const mapRef = useRef<MapRef | null>(null);
  const handleZoomIn = () => {
    mapRef.current?.getMap().zoomIn();
  };

  const handleZoomOut = () => {
    mapRef.current?.getMap().zoomOut();
  };
  return (
    <div className="map-wrapper">
      <div className="map-controls">
        <button className="zoom-button" onClick={handleZoomIn}>
          +
        </button>
        <button className="zoom-button" onClick={handleZoomOut}>
          -
        </button>
      </div>

      <Map
        ref={mapRef}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 75.8577,
          latitude: 22.7196,
          zoom: 11,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        <Marker longitude={75.8577} latitude={22.7196}>
          <div>🟢</div>
        </Marker>
        <Marker longitude={75.8937} latitude={22.7533}>
          <div>🔴</div>
        </Marker>
      </Map>
    </div>
  );
}

export default MapView;
