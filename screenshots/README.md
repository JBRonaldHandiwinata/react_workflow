# Screenshots Guide

This folder contains screenshots showcasing the React Workflow Builder interface and features.

## Required Screenshots

### 1. main-interface.png
Screenshot of the main workflow builder interface showing:
- Left control panel with node type selection
- Center canvas with sample workflow (start → process → decision → result)
- Right output panel with visualization
- Clean white background and elegant UI

**Recommended size**: 1920x1080 or 1440x900
**Format**: PNG with transparent background where applicable

### 2. node-creator-modal.png
Screenshot of the Node Creator modal showing:
- Dark theme modal overlay
- Name input field
- Shape selection dropdown
- Component buttons (+Input Text, +Combobox, +Button, +Checkbox)
- Pink "Add" button at bottom
- Sample components configured in the list

**Recommended size**: 800x600 focused on modal
**Format**: PNG

### 3. process-node-components.png
Screenshot of an expanded process node showing:
- Process node with blue color and gear icon
- Expanded white container below
- Multiple components visible:
  - Input text field with label "Quantity"
  - Combobox with label "Product" 
  - Proper spacing between components
- No overlapping elements

**Recommended size**: 600x400 focused on node
**Format**: PNG

## Screenshot Guidelines

### Capture Settings
- **Browser**: Use Chrome or Safari for consistent rendering
- **Zoom**: 100% browser zoom
- **Window**: Full-width browser window
- **Background**: Ensure clean backgrounds without browser UI

### Content Guidelines
- Use realistic but not sensitive sample data
- Show interactive states (hover effects where applicable)
- Ensure all text is readable
- Include examples of connected nodes where relevant

### File Naming
- Use lowercase with hyphens: `main-interface.png`
- Be descriptive but concise
- Include sequence numbers if showing steps: `step-1-select-node.png`

### Image Quality
- Use PNG format for UI screenshots (better for text)
- Optimize file size but maintain readability
- Minimum 72 DPI, prefer 144 DPI for retina displays

## Taking Screenshots

### Main Interface
1. Start the application (`npm start`)
2. Create a sample workflow with 4-5 connected nodes
3. Ensure left and right panels are visible
4. Capture full browser window or application area

### Node Creator Modal
1. Select Process node type
2. Click on canvas to open modal
3. Add a few sample components
4. Capture while modal is open with sample configuration

### Process Node Components
1. Create a process node with multiple components
2. Click to expand the node
3. Focus capture on the expanded node showing components
4. Ensure no UI elements are cut off

## Integration with README

Screenshots are referenced in the main README.md file using relative paths:
```markdown
![Workflow Builder Main Interface](screenshots/main-interface.png)
```

Update the paths in README.md if files are renamed or moved.
