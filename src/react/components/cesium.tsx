import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import {
  Ion,
  Viewer,
  createWorldTerrain,
  WebMercatorProjection,
  Camera,
} from 'cesium';

const { invoke } = window.store;

function initViewer(
  // ref: React.MutableRefObject<HTMLDivElement>,
  ref: React.RefObject<Element>,
  setViewer: React.Dispatch<React.SetStateAction<Viewer|null>>
): Viewer|null {
  if (!ref || !ref.current) {
    return null
  }
  const viewer = new Viewer(ref.current, {
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
  setViewer(viewer);
  return viewer
}

const Cesium = (): JSX.Element => {
  const [viewer, setViewer] = useState<Viewer|null>(null);
  const cesiumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cesiumRef || !cesiumRef.current) {
      return;
    }

    // Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NmE1ODJhMi0yMGI4LTRlNGYtYjJjNi05NTU4M2M5NTM5NTciLCJpZCI6NTE3MTgsImlhdCI6MTYxODI4MTk1MH0.zF9dW7BBrd2pvj8GRraNaB9vW7egEYraLTDJgDm8cWk';
    Camera.DEFAULT_VIEW_FACTOR = 0;

    invoke({
      name: 'cesium',
      method: 'getIonToken',
    })
    .then((token: string) => {
      console.log(token, '--token');
      Ion.defaultAccessToken = token;
      if (cesiumRef && cesiumRef.current) {
        initViewer(cesiumRef, setViewer);
      }
    })
    .catch((err: Error) => {
      console.error(err);
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
