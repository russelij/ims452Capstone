import React, { useEffect, useState } from 'react';
import {
  ViroScene,
  Viro360Image,
  ViroAmbientLight,
  Viro3DObject,
  ViroText,
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
import MakeScene from './MakeScene';

/**
 * The VR scene that renders all customizations from previous screen.
 * @param {*} props passed from the navigator
 * @returns A ViroScene with all customizations
 */
const vrScene = (props) => {

  const items = props.sceneNavigator.viroAppProps.items;
  const background = props.sceneNavigator.viroAppProps.background;

  return (
    <ViroScene>
      <Viro360Image
        source={background}
      />
      <ViroAmbientLight color="#ffffff" />
      {items.length > 0 ? items.map((i, index) =>
        <Viro3DObject
          key={index}
          source={i.source}
          resources={i.resources}
          position={i.position}
          scale={i.scale}
          rotation={i.rotation}
          type="OBJ"
        />
      ) : null}
    </ViroScene>
  )
}

export default () => {
  const [vr, setVR] = useState(false);
  
  const [items, setItems] = useState([]);
  const [bg, setBg] = useState(null);
  const [vrMode, setVrMode] = useState(true);
  const [time, setTime] = useState(0);

  /**
   * Sets a timeout for VR mode once activated and resets
   * the app once the timer expires.
   * @note Might change this so previous data keeps since the screens
   * are rendered conditionally.
   */
  useEffect(() => {
    if (vr) {
      setTimeout(() => {
        setVR(false);
        setItems([]);
        setBg(null);
      }, 60000 * time);
    }
  }, [vr]);

  /**
   * Parses through the prop and sets the app in VR mode.
   * @param {*} values passed from the prop that calls the function
   */
  const getItems = (values) => {
    setBg(backgroundImages.get(values.bg));
    setItems(values.items.map(element => itemList.get(element)));
    setVrMode(values.vrMode);
    setTime(values.time);
    
    setVR(true);
  }

  return <>
    {
      vr ?
        <ViroVRSceneNavigator
          vrModeEnabled={vrMode}
          initialScene={{ scene: vrScene }}
          viroAppProps={{ background: bg, items: items }}
          debug={true}
        />
        : <MakeScene setItems={(e) => getItems(e)} />
    }
  </>
};

// Assets for the app and their VR params
const itemList = new Map([
  ["greenChair", {
    source: require("./assets/models/puff/puff.obj"),
    resources: [require("./assets/models/puff/puff.mtl")],
    position: [0, 0, -10],
    scale: [.1, .1, .1],
    rotation: [45, 0, 0]
  }]
]);

const backgroundImages = new Map([
  ["coralReef", require("./assets/coralReef.jpg")],
  ["ocean", require("./assets/ocean.jpg")]
]);
