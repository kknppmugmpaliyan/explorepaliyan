import React, { useState, useCallback } from "react";
import MapGL, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";
import { connect } from "frontity";
import { Box } from "@chakra-ui/react";
import UMKMPoint from "../../../../../datasets/umkm-point.json";
import WisataPoint from "../../../../../datasets/wisata-point.json";
import BoundaryMulusan from "../../../../../datasets/boundary-mulusan.json";
import BoundarySodo from "../../../../../datasets/boundary-sodo.json";
import Legends from "./legends";
import Pins from "./pins";
import UMKMInfo from "./umkm-info";
import WisataInfo from "./wisata-info";

// Icons
import { AiTwotoneShop } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { GiMountains } from "react-icons/gi";

const boundaryStyleMulusan = {
  id: "mulusan",
  type: "fill",
  paint: {
    "fill-color": "#630830",
    "fill-opacity": 0.2,
  },
};

const boundaryStyleSodo = {
  id: "sodo",
  type: "fill",
  paint: {
    "fill-color": "#000000",
    "fill-opacity": 0.2,
  },
};

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

const Maps = ({ state }) => {
  const [popupUMKMInfo, setPopupUMKMInfo] = useState(null);
  const [popupWisataInfo, setPopupWisataInfo] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: state.mapbox.longitude,
    latitude: state.mapbox.latitude,
    zoom: state.mapbox.zoom,
  });
  const [layerVisibility, setLayerVisibility] = useState({
    boundary_mulusan: {
      name: "Batas Wilayah Desa Mulusan",
      visible: true,
      marker: <BsFillCircleFill color="#630830" size={20} />,
    },
    boundary_sodo: {
      name: "Batas Wilayah Desa Sodo",
      visible: true,
      marker: <BsFillCircleFill color="#000000" size={20} />,
    },
    "umkm-point": {
      name: "UMKM",
      visible: true,
      marker: <AiTwotoneShop color="#B81E24" size={20} />,
    },
    "wisata-point": {
      name: "Wisata",
      visible: true,
      marker: <GiMountains color="#20639B" size={20} />,
    },
  });

  const changeUMKMPointLocation = useCallback((loc) => {
    setPopupUMKMInfo(loc);
    setViewport({
      longitude: loc.geometry.coordinates[0],
      latitude: loc.geometry.coordinates[1] - 0.006,
      zoom: 14,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  }, []);

  const changeWisataPointLocation = useCallback((loc) => {
    setPopupWisataInfo(loc);
    setViewport({
      longitude: loc.geometry.coordinates[0],
      latitude: loc.geometry.coordinates[1] - 0.006,
      zoom: 14,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  }, []);

  return (
    <Box h="calc(100vh - 70px)">
      <MapGL
        {...viewport}
        width="fit"
        height="100%"
        mapStyle={state.mapbox.style}
        onViewportChange={setViewport}
        mapboxApiAccessToken={state.mapbox.mapboxAccessToken}
      >
        {/* Layers */}
        <Source id="boundary_mulusan" type="geojson" data={BoundaryMulusan}>
          <Layer
            layout={{
              visibility: layerVisibility["boundary_mulusan"].visible
                ? "visible"
                : "none",
            }}
            {...boundaryStyleMulusan}
          />
        </Source>
        <Source id="boundary_sodo" type="geojson" data={BoundarySodo}>
          <Layer
            layout={{
              visibility: layerVisibility["boundary_sodo"].visible
                ? "visible"
                : "none",
            }}
            {...boundaryStyleSodo}
          />
        </Source>
        {layerVisibility["umkm-point"].visible ? (
          <Pins data={UMKMPoint} onClick={changeUMKMPointLocation} size={25}>
            <AiTwotoneShop color="#B81E24" size={25} />
          </Pins>
        ) : (
          <></>
        )}
        {layerVisibility["wisata-point"].visible ? (
          <Pins
            data={WisataPoint}
            onClick={changeWisataPointLocation}
            size={25}
          >
            <GiMountains color="#20639B" size={25} />
          </Pins>
        ) : (
          <></>
        )}

        {/* Popup info */}
        {popupUMKMInfo && (
          <Popup
            tipSize={10}
            anchor="top"
            longitude={popupUMKMInfo.geometry.coordinates[0]}
            latitude={popupUMKMInfo.geometry.coordinates[1]}
            closeOnClick={false}
            onClose={setPopupUMKMInfo}
          >
            <UMKMInfo info={popupUMKMInfo} />
          </Popup>
        )}
        {popupWisataInfo && (
          <Popup
            tipSize={10}
            anchor="top"
            longitude={popupWisataInfo.geometry.coordinates[0]}
            latitude={popupWisataInfo.geometry.coordinates[1]}
            closeOnClick={false}
            onClose={setPopupWisataInfo}
          >
            <WisataInfo info={popupWisataInfo} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
      <Legends
        layerVisibility={layerVisibility}
        setLayerVisibility={setLayerVisibility}
      />
    </Box>
  );
};

export default connect(Maps);
