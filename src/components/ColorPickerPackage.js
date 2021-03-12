import { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPickerPackage = () => {
  const [colorPicked, setColorPicked] = useState('#fff');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div style={{ backgroundColor: colorPicked }}>
      <button onClick={() => setShowPicker(!showPicker)}>
        {showPicker ? 'close picker' : 'picker a color'}
      </button>
      {showPicker && (
        <ChromePicker
          color={colorPicked}
          onChange={(colorPicked) => setColorPicked(colorPicked.hex)}
        />
      )}

      <h1>YOU PICKED {colorPicked}</h1>
    </div>
  );
};

export default ColorPickerPackage;
