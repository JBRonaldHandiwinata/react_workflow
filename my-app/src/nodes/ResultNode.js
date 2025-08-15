import React from 'react';
import { Handle, Position } from 'reactflow';

function ResultNode({ data }) {
  return (
    <div className="node-wrapper result-node">
      <Handle
        type="target"
        position={Position.Top}
        className="node-handle"
      />
      <div className="node-shape" style={{ backgroundColor: data.color || '#F44336' }}>
        <span className="node-icon">✓</span>
      </div>
      <div className="node-label">Result</div>
    </div>
  );
}

export default ResultNode;
