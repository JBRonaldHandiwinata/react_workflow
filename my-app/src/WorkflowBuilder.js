import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import StartNode from './nodes/StartNode';
import ProcessNode from './nodes/ProcessNode';
import DecisionNode from './nodes/DecisionNode';
import ResultNode from './nodes/ResultNode';
import ControlPanel from './components/ControlPanel';
import NodeCreatorModal from './components/NodeCreatorModal';

// Daftarkan node types kustom
const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  decision: DecisionNode,
  result: ResultNode,
};

// Initial nodes dan edges
const initialNodes = [];

const initialEdges = [];

function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeId, setNodeId] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#4CAF50');
  const [selectedNodeType, setSelectedNodeType] = useState('start');
  const [zoomLevel, setZoomLevel] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingNodePosition, setPendingNodePosition] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({
      ...params,
      style: { stroke: '#ddd', strokeWidth: 2 }
    }, eds)),
    [setEdges]
  );

  const addNode = useCallback((nodeConfig = null) => {
    const position = pendingNodePosition || {
      x: Math.random() * 500 + 200,
      y: Math.random() * 400 + 100,
    };

    const newNode = {
      id: nodeId.toString(),
      type: selectedNodeType,
      position,
      data: { 
        color: selectedColor,
        ...nodeConfig
      },
    };

    setNodes((nds) => nds.concat(newNode));
    setNodeId((id) => id + 1);
    setPendingNodePosition(null);
  }, [nodeId, setNodes, selectedColor, selectedNodeType, pendingNodePosition]);

  const handleCanvasClick = useCallback((event) => {
    // Add node on canvas click
    if (event.target.classList.contains('react-flow__pane')) {
      const rect = event.currentTarget.getBoundingClientRect();
      const position = {
        x: event.clientX - rect.left - 400, // Offset for left panels
        y: event.clientY - rect.top - 50,
      };

      if (selectedNodeType === 'process') {
        // Open modal for process nodes
        setPendingNodePosition(position);
        setIsModalOpen(true);
      } else {
        // Create simple node directly
        const newNode = {
          id: nodeId.toString(),
          type: selectedNodeType,
          position,
          data: { 
            color: selectedColor
          },
        };

        setNodes((nds) => nds.concat(newNode));
        setNodeId((id) => id + 1);
      }
    }
  }, [nodeId, setNodes, selectedColor, selectedNodeType]);

  const handleCreateNode = useCallback((nodeConfig) => {
    addNode(nodeConfig);
  }, [addNode]);

  const generateUniqueFileName = () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const randomId = Math.random().toString(36).substr(2, 6);
    return `workflow_${timestamp}_${randomId}.json`;
  };

  const saveWorkflowToJSON = useCallback(() => {
    const workflow = {
      metadata: {
        createdAt: new Date().toISOString(),
        version: '1.0.0',
        nodeCount: nodes.length,
        edgeCount: edges.length,
        description: 'React Workflow Builder Export'
      },
      workflow: {
        nodes: nodes.map(node => ({
          id: node.id,
          type: node.type,
          position: node.position,
          data: node.data
        })),
        edges: edges.map(edge => ({
          id: edge.id,
          source: edge.source,
          target: edge.target,
          sourceHandle: edge.sourceHandle,
          targetHandle: edge.targetHandle
        }))
      }
    };

    const fileName = generateUniqueFileName();
    const dataStr = JSON.stringify(workflow, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', fileName);
    linkElement.click();

    // Show confirmation message
    alert(`Workflow saved as: ${fileName}\nPlease move the file to the 'promos' folder if needed.`);
  }, [nodes, edges]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#f8f9fa' }}>
      <ControlPanel 
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedNodeType={selectedNodeType}
        setSelectedNodeType={setSelectedNodeType}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
        onAddNode={addNode}
        onSaveWorkflow={saveWorkflowToJSON}
      />
      
      <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
        <div className="output-panel">
          <h3>output</h3>
          <div className="output-visualization">
            {nodes.map((node, index) => (
              <div 
                key={node.id}
                className={`output-node ${node.type}`}
                style={{ 
                  backgroundColor: node.data.color,
                  transform: `scale(${0.4 + Math.random() * 0.3}) rotate(${Math.random() * 360}deg)`,
                  left: `${20 + (index % 8) * 30}px`,
                  top: `${20 + Math.floor(index / 8) * 30}px`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.Straight}
        onPaneClick={handleCanvasClick}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#e0e0e0" gap={20} size={1} />
      </ReactFlow>

      <NodeCreatorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setPendingNodePosition(null);
        }}
        onCreateNode={handleCreateNode}
        nodeType={selectedNodeType}
      />
    </div>
  );
}

export default WorkflowBuilder;
