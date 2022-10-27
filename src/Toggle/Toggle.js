import React from 'react';
import './Toggle.css'
const Toggle = () => {
    return (
        <div>
          <label className="swith" id="model-red">
            <input type="checkbox" />
            <span className="slider" />
          </label>
      </div>
    );
};

export default Toggle;