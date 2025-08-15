import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { renderComponent } from '../components/NodeComponents';

function ProcessNode({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleComponentChange = (componentId, value) => {
    // Handle component value changes
    console.log(`Component ${componentId} changed to:`, value);
  };

  const handleComponentClick = (componentId) => {
    // Handle component button clicks
    console.log(`Component ${componentId} clicked`);
  };

  const hasComponents = data.components && data.components.length > 0;
  const displayName = data.name || 'Process';

  return (
    <div className={`node-wrapper process-node ${isExpanded ? 'expanded' : ''}`}>
      <Handle
        type="target"
        position={Position.Top}
        className="node-handle"
      />
      
      {/* Node Header */}
      <div 
        className="node-header-clickable"
        onClick={() => hasComponents && setIsExpanded(!isExpanded)}
        style={{ cursor: hasComponents ? 'pointer' : 'default' }}
      >
        <div className="node-shape" style={{ backgroundColor: data.color || '#2196F3' }}>
          <span className="node-icon">⚙</span>
        </div>
        <div className="node-label">{displayName}</div>
        {hasComponents && (
          <div className="expand-indicator">
            {isExpanded ? '▼' : '▶'}
          </div>
        )}
      </div>

      {/* Node Components */}
      {isExpanded && hasComponents && (
        <div className="node-components-container">
          <div className="components-wrapper">
            {data.components.map((component, index) => (
              <div key={component.id} className="component-wrapper">
                {renderComponent(component, handleComponentChange, handleComponentClick)}
              </div>
            ))}
          </div>
        </div>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        className="node-handle"
      />
    </div>
  );
}

export default ProcessNode;
