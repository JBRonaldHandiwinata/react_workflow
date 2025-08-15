# React Workflow Builder

A modern, clean, and elegant workflow builder application built with React and ReactFlow library. This project provides an intuitive interface for creating visual workflows with customizable nodes and interactive components.

## ✨ Features

### 🎨 Clean & Elegant UI Design
- **Modern Interface**: White, minimalist design with subtle shadows and rounded corners
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Professional Typography**: Clean fonts and consistent spacing

### 🔧 Node Types
1. **Start Node** (▶) - Green circular node to begin workflows
2. **Process Node** (⚙) - Blue rectangular node with customizable components
3. **Decision Node** (?) - Orange diamond node for branching logic
4. **Result Node** (✓) - Red rectangular node for workflow endpoints

### 🛠️ Interactive Components for Process Nodes
Process nodes can contain interactive UI components:
- **Input Text Fields** - For text data entry
- **Combobox/Dropdown** - For selection from predefined options
- **Buttons** - For triggering actions
- **Checkboxes** - For boolean selections

### 🎯 Core Functionality
- **Drag & Drop**: Click anywhere on canvas to add nodes
- **Node Connections**: Drag from connection points to link nodes
- **Expandable Process Nodes**: Click to expand/collapse component containers
- **Real-time Output Panel**: Visual representation of created nodes
- **Node Configuration**: Modal-based setup for complex process nodes

## 🖼️ Screenshots

### Main Workflow Interface
![Workflow Builder Main Interface](https://github.com/user/react_workflow/blob/screenshots/main-interface.png)

The main interface features:
- **Left Panel**: Node type selection and color configuration
- **Center Canvas**: Interactive workflow design area with dotted background
- **Right Panel**: Real-time output visualization
- **Clean Layout**: Minimal distractions, focus on workflow creation

### Node Creator Modal
![Node Creator Modal](https://github.com/user/react_workflow/blob/screenshots/node-creator-modal.png)

The Node Creator modal provides:
- **Dark Theme**: Professional dark interface
- **Component Builder**: Add multiple UI components to process nodes
- **Shape Selection**: Choose from Rectangle, Circle, Diamond, Rounded
- **Live Preview**: See components as you build them

### Process Node with Components
![Process Node Components](https://github.com/user/react_workflow/blob/main/screenshots/process-node-components.png)

Process nodes can expand to show:
- **Input Fields**: Clean text inputs with labels
- **Dropdown Menus**: Custom select components with options
- **Proper Spacing**: No overlapping elements, clean layout
- **Interactive Elements**: Fully functional form components

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/user/react_workflow.git
cd react_workflow/my-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## 📚 Usage Guide

### Creating a Basic Workflow

1. **Select Node Type**: Choose from Start, Process, Decision, or Result in the left panel
2. **Add Nodes**: Click anywhere on the canvas to place a node
3. **Connect Nodes**: Drag from the small connection points (handles) to create links
4. **Customize**: For Process nodes, the Node Creator modal will open automatically

### Adding Components to Process Nodes

1. **Click Canvas** with Process node selected
2. **Configure in Modal**:
   - Enter a name for your process
   - Select the shape style
   - Add components using the + buttons
3. **Customize Components**:
   - Edit labels for each component
   - For comboboxes, add options (one per line)
   - Remove unwanted components with the × button
4. **Create Node**: Click "Add" to place the configured node

### Interacting with Process Nodes

1. **Expand/Collapse**: Click on process nodes to show/hide components
2. **Use Components**: 
   - Type in text fields
   - Select from dropdown options
   - Click buttons and checkboxes
3. **View Output**: See real-time visualization in the right panel

## 🎨 UI Design Philosophy

### Color Scheme
- **Primary**: Clean whites and light grays for main interface
- **Accents**: Pink (#ff0071) for interactive elements
- **Node Colors**: 
  - Green (#4CAF50) for Start nodes
  - Blue (#2196F3) for Process nodes
  - Orange (#FF9800) for Decision nodes
  - Red (#F44336) for Result nodes

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- **Sizes**: Consistent 12-16px range for optimal readability
- **Weights**: 400-600 for clear hierarchy

### Layout Principles
- **Generous Spacing**: Prevents UI crowding
- **Clear Hierarchy**: Visual emphasis on important elements
- **Consistent Patterns**: Predictable interaction models
- **Responsive Design**: Works on various screen sizes

## 🛠️ Technical Stack

- **React 19.1.1**: Modern React with hooks and functional components
- **ReactFlow 11.11.4**: Powerful flow chart library for node-based interfaces
- **CSS3**: Custom styling with flexbox and grid layouts
- **JavaScript ES6+**: Modern JavaScript features

## 📁 Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── ControlPanel.js      # Left sidebar controls
│   │   ├── NodeCreatorModal.js  # Modal for configuring process nodes
│   │   └── NodeComponents.js    # Reusable input components
│   ├── nodes/
│   │   ├── StartNode.js         # Start node component
│   │   ├── ProcessNode.js       # Process node with expandable components
│   │   ├── DecisionNode.js      # Decision/branching node
│   │   └── ResultNode.js        # End/result node
│   ├── App.js                   # Main application component
│   ├── App.css                  # Global styles and component styling
│   ├── WorkflowBuilder.js       # Core workflow management logic
│   └── index.js                 # Application entry point
└── public/                      # Static assets
```

## 🔮 Future Enhancements

- **Export/Import**: Save and load workflow configurations
- **Validation**: Real-time workflow validation and error checking
- **Templates**: Pre-built workflow templates for common patterns
- **Collaboration**: Multi-user editing capabilities
- **Custom Themes**: Additional color schemes and layouts
- **Performance**: Optimization for large workflows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ReactFlow](https://reactflow.dev/) - Excellent library for building node-based interfaces
- [React](https://reactjs.org/) - The foundation of this application
- Design inspiration from modern workflow tools and design systems
