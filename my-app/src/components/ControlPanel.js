import React from 'react';

function ControlPanel({ 
  selectedColor, 
  setSelectedColor, 
  selectedNodeType,
  setSelectedNodeType,
  zoomLevel, 
  setZoomLevel 
}) {
  const nodeTypes = [
    { value: 'start', label: 'Start', icon: '▶', color: '#4CAF50' },
    { value: 'process', label: 'Process', icon: '⚙', color: '#2196F3' },
    { value: 'decision', label: 'Decision', icon: '?', color: '#FF9800' },
    { value: 'result', label: 'Result', icon: '✓', color: '#F44336' }
  ];

  return (
    <div className="control-panels">
      {/* Node Color Panel */}
      <div className="control-panel">
        <h3>node color</h3>
        <div className="color-section">
          <div 
            className="color-preview" 
            style={{ backgroundColor: selectedColor }}
          />
          <span className="color-code">{selectedColor}</span>
        </div>
      </div>

      {/* Node Type Panel */}
      <div className="control-panel">
        <h3>node type</h3>
        <div className="node-type-options">
          {nodeTypes.map((nodeType) => (
            <label key={nodeType.value} className="node-type-option">
              <input
                type="radio"
                name="nodeType"
                value={nodeType.value}
                checked={selectedNodeType === nodeType.value}
                onChange={(e) => {
                  setSelectedNodeType(e.target.value);
                  setSelectedColor(nodeType.color);
                }}
              />
              <div className="node-type-preview">
                <span className="node-type-icon" style={{ color: nodeType.color }}>
                  {nodeType.icon}
                </span>
                <span className="node-type-label">{nodeType.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Zoom Level Panel */}
      <div className="control-panel">
        <h3>zoom level</h3>
        <div className="zoom-section">
          <input
            type="range"
            min="10"
            max="100"
            value={zoomLevel}
            onChange={(e) => setZoomLevel(parseInt(e.target.value))}
            className="zoom-slider"
          />
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
