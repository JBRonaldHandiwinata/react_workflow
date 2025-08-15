import React, { useState } from 'react';

export function InputText({ component, onChange }) {
  const [value, setValue] = useState(component.value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(component.id, e.target.value);
  };

  return (
    <div className="node-component input-text-component">
      <label className="component-label">{component.label}</label>
      <input
        type="text"
        className="node-input"
        value={value}
        onChange={handleChange}
        placeholder="Enter text..."
      />
    </div>
  );
}

export function Combobox({ component, onChange }) {
  const [value, setValue] = useState(component.value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(component.id, e.target.value);
  };

  return (
    <div className="node-component combobox-component">
      <label className="component-label">{component.label}</label>
      <select
        className="node-select"
        value={value}
        onChange={handleChange}
      >
        <option value="">Select option...</option>
        {component.options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export function Button({ component, onClick }) {
  return (
    <div className="node-component button-component">
      <button
        className="node-button"
        onClick={() => onClick && onClick(component.id)}
      >
        {component.label}
      </button>
    </div>
  );
}

export function Checkbox({ component, onChange }) {
  const [checked, setChecked] = useState(component.value || false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange && onChange(component.id, e.target.checked);
  };

  return (
    <div className="node-component checkbox-component">
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="node-checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span className="checkbox-text">{component.label}</span>
      </label>
    </div>
  );
}

export function renderComponent(component, onChange, onClick) {
  switch (component.type) {
    case 'input-text':
      return <InputText key={component.id} component={component} onChange={onChange} />;
    case 'combobox':
      return <Combobox key={component.id} component={component} onChange={onChange} />;
    case 'button':
      return <Button key={component.id} component={component} onClick={onClick} />;
    case 'checkbox':
      return <Checkbox key={component.id} component={component} onChange={onChange} />;
    default:
      return null;
  }
}
