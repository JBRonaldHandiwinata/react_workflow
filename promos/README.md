# Promos Folder

This folder contains saved workflow JSON files exported from the React Workflow Builder application.

## File Structure

Workflow files are automatically saved with unique names following this pattern:
```
workflow_YYYY-MM-DDTHH-MM-SS-sssZ_randomId.json
```

Example: `workflow_2024-01-15T10-30-45-123Z_a1b2c3.json`

## File Format

Each JSON file contains the complete workflow data including:

### Metadata Section
```json
{
  "metadata": {
    "createdAt": "2024-01-15T10:30:45.123Z",
    "version": "1.0.0",
    "nodeCount": 5,
    "edgeCount": 4,
    "description": "React Workflow Builder Export"
  }
}
```

### Workflow Section
```json
{
  "workflow": {
    "nodes": [
      {
        "id": "1",
        "type": "start",
        "position": { "x": 250, "y": 25 },
        "data": { "color": "#4CAF50" }
      }
    ],
    "edges": [
      {
        "id": "e1-2",
        "source": "1",
        "target": "2",
        "sourceHandle": null,
        "targetHandle": null
      }
    ]
  }
}
```

## Node Types

The workflow supports the following node types:

1. **start** - Starting point of the workflow (green)
2. **process** - Processing step with optional components (blue)
3. **decision** - Decision/branching point (orange)
4. **result** - End point of the workflow (red)

## Process Node Components

Process nodes can contain interactive components:

- **input-text** - Text input fields
- **combobox** - Dropdown selection
- **button** - Action buttons
- **checkbox** - Boolean toggles

## Usage

### Saving Workflows
1. Create your workflow in the React Workflow Builder
2. Click the "💾 Save Workflow" button in the control panel
3. The file will be downloaded to your browser's download folder
4. Move the file to this `promos` folder for organization

### Loading Workflows
Currently, the application supports export only. Import functionality can be added in future versions.

## File Management

- Keep this folder organized by date or project
- Use descriptive names when manually renaming files
- Maintain the `.json` extension for proper file recognition
- Consider creating subfolders for different projects:
  ```
  promos/
  ├── project-a/
  ├── project-b/
  └── archived/
  ```

## Integration Tips

These JSON files can be used for:
- Backup and version control
- Sharing workflows between team members
- Integration with other tools via JSON parsing
- Analysis of workflow patterns
- Documentation purposes

## Sample Workflow

A sample workflow file structure:
```json
{
  "metadata": {
    "createdAt": "2024-01-15T10:30:45.123Z",
    "version": "1.0.0",
    "nodeCount": 4,
    "edgeCount": 3,
    "description": "React Workflow Builder Export"
  },
  "workflow": {
    "nodes": [
      {
        "id": "1",
        "type": "start",
        "position": { "x": 250, "y": 50 },
        "data": { "color": "#4CAF50" }
      },
      {
        "id": "2",
        "type": "process",
        "position": { "x": 250, "y": 150 },
        "data": { 
          "color": "#2196F3",
          "name": "User Input",
          "components": [
            {
              "id": 1642512345678,
              "type": "input-text",
              "label": "Username",
              "value": ""
            }
          ]
        }
      },
      {
        "id": "3",
        "type": "decision",
        "position": { "x": 250, "y": 250 },
        "data": { "color": "#FF9800" }
      },
      {
        "id": "4",
        "type": "result",
        "position": { "x": 250, "y": 350 },
        "data": { "color": "#F44336" }
      }
    ],
    "edges": [
      {
        "id": "e1-2",
        "source": "1",
        "target": "2"
      },
      {
        "id": "e2-3",
        "source": "2",
        "target": "3"
      },
      {
        "id": "e3-4",
        "source": "3",
        "target": "4",
        "sourceHandle": "right"
      }
    ]
  }
}
```
