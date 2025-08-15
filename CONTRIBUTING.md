# Contributing to React Workflow Builder

Thank you for your interest in contributing to React Workflow Builder! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Development Setup

1. **Fork the repository** and clone your fork
```bash
git clone https://github.com/your-username/react_workflow.git
cd react_workflow/my-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open browser** to [http://localhost:3000](http://localhost:3000)

### Development Environment

- **Node.js**: Version 14 or higher
- **Package Manager**: npm (included with Node.js)
- **Browser**: Chrome, Firefox, Safari, or Edge
- **Editor**: VS Code recommended with React extensions

## 📝 Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Follow React best practices for state management
- Use descriptive variable and function names
- Add comments for complex logic
- Prefer const/let over var

### CSS
- Use CSS classes with descriptive names
- Follow BEM methodology where applicable
- Group related styles together
- Use consistent spacing and indentation
- Prefer flexbox/grid for layouts

### File Organization
- Components in `/src/components/`
- Node types in `/src/nodes/`
- Shared utilities in `/src/utils/` (if needed)
- CSS in `/src/App.css` or component-specific files

## 🎨 Design Guidelines

### UI Consistency
- Follow the established color scheme
- Maintain consistent spacing (8px, 12px, 16px, 24px)
- Use the same font family and sizes
- Ensure proper contrast ratios for accessibility

### Color Palette
```css
/* Primary Colors */
--primary-pink: #ff0071;
--node-start: #4CAF50;
--node-process: #2196F3;
--node-decision: #FF9800;
--node-result: #F44336;

/* Neutral Colors */
--background-light: #f8f9fa;
--surface-white: #ffffff;
--border-light: #e0e0e0;
--text-primary: #333333;
--text-secondary: #666666;
```

### Typography Scale
- Large headings: 20px (font-weight: 600)
- Medium headings: 16px (font-weight: 500)
- Body text: 14px (font-weight: 400)
- Small text: 12px (font-weight: 400)
- Captions: 11px (font-weight: 500)

## 🔧 Component Development

### Creating New Node Types

1. **Create component file** in `/src/nodes/`
```javascript
// Example: CustomNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="node-wrapper custom-node">
      <Handle type="target" position={Position.Top} />
      {/* Node content */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CustomNode;
```

2. **Add styles** to `/src/App.css`
3. **Register node type** in `/src/WorkflowBuilder.js`
4. **Update control panel** if needed

### Adding New Components

1. **Create component** in `/src/components/NodeComponents.js`
2. **Add to component types** in `/src/components/NodeCreatorModal.js`
3. **Update render function** to handle new type
4. **Add appropriate styling**

## 🧪 Testing Guidelines

### Manual Testing
- Test all node types creation and interaction
- Verify component functionality in process nodes
- Check responsive behavior on different screen sizes
- Test keyboard navigation and accessibility
- Verify modal interactions and form submissions

### Browser Testing
- Chrome (primary development browser)
- Firefox
- Safari (macOS)
- Edge (Windows)

### Performance Testing
- Test with large numbers of nodes (50+)
- Check for memory leaks during extended use
- Verify smooth animations and interactions

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props using PropTypes or TypeScript
- Include usage examples for new components

### README Updates
- Update feature lists for new functionality
- Add screenshots for significant UI changes
- Update installation or usage instructions as needed

## 🐛 Bug Reports

### Information to Include
- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to recreate the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Browser/OS**: Environment details
- **Screenshots**: Visual evidence if applicable

### Bug Report Template
```markdown
**Description**
Brief description of the issue

**Steps to Reproduce**
1. Step one
2. Step two
3. Step three

**Expected Behavior**
What you expected to happen

**Actual Behavior**
What actually happened

**Environment**
- Browser: Chrome 120.0
- OS: macOS 14.0
- Node Version: 18.17.0

**Screenshots**
[Attach screenshots if relevant]
```

## 🎯 Feature Requests

### Guidelines for New Features
- Align with the project's clean, elegant design philosophy
- Consider impact on performance and bundle size
- Provide clear use cases and user benefits
- Include mockups or wireframes for UI features

### Feature Request Template
```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Who would use this feature and why

**Proposed Implementation**
High-level approach to implementing the feature

**Alternatives Considered**
Other approaches you've considered

**Additional Context**
Any other relevant information
```

## 🔄 Pull Request Process

### Before Submitting
1. **Test thoroughly** on multiple browsers
2. **Update documentation** if needed
3. **Follow code style** guidelines
4. **Add screenshots** for UI changes
5. **Check for console errors** or warnings

### Pull Request Template
```markdown
**Description**
Summary of changes made

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

**Testing**
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested responsive design
- [ ] No console errors

**Screenshots**
[Include before/after screenshots for UI changes]

**Additional Notes**
Any additional information for reviewers
```

### Review Process
1. **Automated checks** must pass
2. **Code review** by maintainer
3. **Testing** by reviewer
4. **Approval** and merge

## 📞 Getting Help

### Community Support
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion

### Response Times
- Bug reports: Within 2-3 days
- Feature requests: Within 1 week
- Pull requests: Within 1 week

## 📄 License

By contributing to React Workflow Builder, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors page

Thank you for helping make React Workflow Builder better! 🚀
