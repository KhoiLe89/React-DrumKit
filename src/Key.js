import React, { Component } from 'react';
import './App.css';

class Key extends Component {
  render() {
    return (
      <div className="keys">
        <div dataKey="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div dataKey="83" className="key">
          <kbd>S</kbd>
          <span className="sound">highhat</span>
        </div>
        <div dataKey="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div dataKey="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div dataKey="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div dataKey="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div dataKey="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div dataKey="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div dataKey="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>
    );
  }
}

export default Key;
