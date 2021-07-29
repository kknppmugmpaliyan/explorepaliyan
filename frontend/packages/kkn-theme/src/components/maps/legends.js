import React, { memo } from "react";
import { styled } from "frontity";
import StyleControl from "../constant/style-control";

const Checkbox = ({ keyName, name, value, onChange, marker }) => {
  return (
    <tr key={keyName} style={{ lineHeight: "20pt" }}>
      <td>
        <div style={{ marginRight: "10px" }}>{marker}</div>
      </td>
      <td>
        <label>{name}</label>
      </td>
      <td>
        <input
          style={{ marginLeft: "50px" }}
          type="checkbox"
          checked={value}
          onChange={(evt) => onChange(keyName, evt.target.checked)}
        />
      </td>
    </tr>
  );
};

const StyleControls = (props) => {
  const { layerVisibility, setLayerVisibility } = props;

  const toggleLayer = (keyName, val) => {
    setLayerVisibility({
      ...layerVisibility,
      [keyName]: { ...layerVisibility[keyName], visible: val },
    });
  };

  return (
    <Legends>
      <div style={{ color: StyleControl.secondaryColor, fontSize: 15 }}>
        <b>LEGENDA</b>
      </div>
      <hr style={{ marginBottom: "10px" }}></hr>
      <table>
        <tbody>
          {Object.keys(layerVisibility).map((key) => (
            <Checkbox
              key={key}
              keyName={key}
              name={layerVisibility[key].name}
              value={layerVisibility[key].visible}
              marker={layerVisibility[key].marker}
              onChange={toggleLayer}
            />
          ))}
        </tbody>
      </table>
    </Legends>
  );
};

const Legends = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 320px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  margin: 20px;
  font-size: 13px;
  line-height: 2;
  color: #6b6b76;
  // text-transform: uppercase;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
`;

export default memo(StyleControls);
