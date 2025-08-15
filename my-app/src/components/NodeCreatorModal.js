import React, { useState } from 'react';

function NodeCreatorModal({ isOpen, onClose, onCreateNode, nodeType }) {
  const [nodeName, setNodeName] = useState('');
  const [selectedShape, setSelectedShape] = useState('Rectangle');
  const [components, setComponents] = useState([]);

  const shapeOptions = ['Rectangle', 'Circle', 'Diamond', 'Rounded'];
  const componentTypes = [
    { value: 'input-text', label: 'Input Text' },
    { value: 'combobox', label: 'Combobox' },
    { value: 'button', label: 'Button' },
    { value: 'checkbox', label: 'Checkbox' }
  ];

  const addComponent = (type) => {
    const newComponent = {
      id: Date.now(),
      type,
      label: `${type} ${components.length + 1}`,
      value: '',
      options: type === 'combobox' ? ['Option 1', 'Option 2', 'Option 3'] : []
    };
    setComponents([...components, newComponent]);
  };

  const removeComponent = (id) => {
    setComponents(components.filter(comp => comp.id !== id));
  };

  const updateComponent = (id, field, value) => {
    setComponents(components.map(comp =>
      comp.id === id ? { ...comp, [field]: value } : comp
    ));
  };

  const handleSubmit = () => {
    if (nodeName.trim()) {
      onCreateNode({
        name: nodeName,
        shape: selectedShape.toLowerCase(),
        components: components
      });
      
      // Reset form
      setNodeName('');
      setSelectedShape('Rectangle');
      setComponents([]);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content node-creator-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Node Creator</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-input"
              value={nodeName}
              onChange={(e) => setNodeName(e.target.value)}
              placeholder="Enter node name"
            />
          </div>

          <div className="form-group">
            <label>Shape</label>
            <select
              className="form-select"
              value={selectedShape}
              onChange={(e) => setSelectedShape(e.target.value)}
            >
              {shapeOptions.map(shape => (
                <option key={shape} value={shape}>{shape}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Components</label>
            <div className="component-buttons">
              {componentTypes.map(comp => (
                <button
                  key={comp.value}
                  className="component-btn"
                  onClick={() => addComponent(comp.value)}
                >
                  + {comp.label}
                </button>
              ))}
            </div>

            <div className="components-list">
              {components.map(component => (
                <div key={component.id} className="component-item">
                  <div className="component-header">
                    <span className="component-type">{component.type}</span>
                    <button
                      className="remove-component"
                      onClick={() => removeComponent(component.id)}
                    >
                      ×
                    </button>
                  </div>
                  <input
                    type="text"
                    className="component-label-input"
                    value={component.label}
                    onChange={(e) => updateComponent(component.id, 'label', e.target.value)}
                    placeholder="Component label"
                  />
                  {component.type === 'combobox' && (
                    <textarea
                      className="component-options"
                      value={component.options.join('\n')}
                      onChange={(e) => updateComponent(component.id, 'options', e.target.value.split('\n'))}
                      placeholder="Enter options (one per line)"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-add" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default NodeCreatorModal;
