import React from 'react';
import { Handle, Position } from 'reactflow';

function StartNode({ data }) {
  return (
    <div className="node-wrapper start-node">
      <div className="node-shape" style={{ backgroundColor: data.color || '#4CAF50' }}>
        <span className="node-icon">▶</span>
      </div>
      <div className="node-label">Start</div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="node-handle"
      />
    </div>
  );
}

export default StartNode;
