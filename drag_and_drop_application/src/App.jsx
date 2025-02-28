import { useState } from 'react'
import { DndContext } from "@dnd-kit/core"; 
{/*needed for drag and drop area*/}
import './App.css'
import Quadrant from './components/Quadrant'

{/*Array containing information about quadrants*/}
const QUADRANTS = [
  { id: "TOP LEFT", title: "Circles", shape: "circle" },
  { id: "TOP RIGHT", title: "Hexagons", shape: "hexagon" },
  { id: "BOTTOM LEFT", title: "Squares", shape: "square" },
  { id: "BOTTOM RIGHT", title: "Triangles", shape: "triangle" },
];

{/*Array containing initial state and information about shapes*/}
const INITIAL_SHAPES = [
  { id: "1", shape: "circle", quadrant: "TOP LEFT" },
  { id: "2", shape: "circle", quadrant: "TOP LEFT" },
  { id: "3", shape: "circle", quadrant: "TOP LEFT" },
  { id: "4", shape: "circle", quadrant: "TOP LEFT" },
  { id: "5", shape: "circle", quadrant: "TOP LEFT" },
];

export default function App() {
  {/*setShapes is used to update shapes*/}
  const [shapes, setShapes] = useState(INITIAL_SHAPES);
  
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const shapeId = active.id; // ID of the dragged shape
    const newQuadrant = over.id; // ID of the quadrant where it was dropped
    
    setShapes(() =>
      shapes.map((shape) =>
          shape.id === shapeId ? { ...shape, quadrant: newQuadrant } : shape
      )
  );
  }

  return (
    <div className="grid grid-cols-2 bg-gray-700 h-dvh w-dvw">
    
    {/*}mapping quadrants on main page.
    //each quadrant has 0.5 width height of the parent div
    //DndContext allows drag and drop to be implemented between its tags*/}
          <DndContext onDragEnd={handleDragEnd}>
              {QUADRANTS.map((quadrant) => (
                  <Quadrant
                      className="w-1/2 h-1/2"
                      key={quadrant.id}
                      quadrant={quadrant}
                      shapes={shapes.filter((shape) => shape.quadrant === quadrant.id)}
                  />
              ))}
          </DndContext>
      </div>
  );
}

