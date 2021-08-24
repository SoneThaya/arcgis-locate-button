import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const Map = () => {
  const MapEl = useRef(null);

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView", "esri/widgets/Locate"]).then(
      ([Map, MapView, Locate]) => {
        var map = new Map({
          basemap: "topo-vector",
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-56.049, 38.485, 78],
          zoom: 3,
        });

        var locateBtn = new Locate({
          view: view,
        });

        // Add the locate widget to the top left corner of the view
        view.ui.add(locateBtn, {
          position: "top-left",
        });
      }
    );
  }, []);

  return (
    <div
      id="viewDiv"
      style={{ height: "100vh", width: "100vw" }}
      ref={MapEl}
    ></div>
  );
};

export default Map;
