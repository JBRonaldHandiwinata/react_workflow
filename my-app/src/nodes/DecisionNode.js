import React from 'react';
import { Handle, Position } from 'reactflow';

function DecisionNode({ data }) {
  return (
    <div className="node-wrapper decision-node">
      <Handle
        type="target"
        position={Position.Top}
        className="node-handle"
      />
      <div className="node-shape diamond" style={{ backgroundColor: data.color || '#FF9800' }}>
        <span className="node-icon">?</span>
      </div>
      <div className="node-label">Decision</div>
      <Handle
        type="source"
        position={Position.Left}
        className="node-handle"
        id="left"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="node-handle"
        id="right"
      />
    </div>
  );
}

export default DecisionNode;
