import React, {
  useRef,
  useEffect,
} from 'react';
import {
  Ion,
  Viewer,
  createWorldTerrain,
  WebMercatorProjection,
  Camera,
} from 'cesium';

const Cesium = (): JSX.Element => {
  const cesiumRef = useRef();

  useEffect(() => {
    if (!cesiumRef && !cesiumRef.current) {
      return;
    }

    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NmE1ODJhMi0yMGI4LTRlNGYtYjJjNi05NTU4M2M5NTM5NTciLCJpZCI6NTE3MTgsImlhdCI6MTYxODI4MTk1MH0.zF9dW7BBrd2pvj8GRraNaB9vW7egEYraLTDJgDm8cWk';

    Camera.DEFAULT_VIEW_FACTOR = 0;

    const viewer = new Viewer(cesiumRef.current, {
      animation: false,
      geocoder: false,
      navigationHelpButton: false,
      selectionIndicator: false,
      timeline: false,
      // set esri imager
      baseLayerPicker: true,
      terrainProvider: createWorldTerrain(),
      mapProjection: new WebMercatorProjection(),
      // save GPU memory
      scene3DOnly: true, // scene only in 3d
      automaticallyTrackDataSourceClocks: false,
      // framerate?
      targetFrameRate: 30,
    });

    return () => {
      viewer && viewer.destroy();
    };
  }, []);

  const styleObj = {
    width: '100%',
    height: '100%',
  };

  return (
    <div ref={cesiumRef} style={styleObj}>
    </div>
  );
}

export default Cesium;
