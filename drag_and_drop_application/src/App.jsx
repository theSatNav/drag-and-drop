import { useState } from 'react'
import './App.css'
import { DndContext } from "@dnd-kit/core"; //needed for drag and drop area

//Array containing information about quadrants
const QUADRANTS = [
  { id: "TOP LEFT", title: "Circles", shape: "circle" },
  { id: "TOP RIGHT", title: "Hexagons", shape: "hexagon" },
  { id: "BOTTOM LEFT", title: "Squares", shape: "square" },
  { id: "BOTTOM RIGHT", title: "Triangles", shape: "triangle" },
];

//Array containing initial state and information about shapes
const INITIAL_SHAPES = [
  { id: "1", shape: "circle", quadrant: "TOP LEFT" },
  { id: "2", shape: "circle", quadrant: "TOP LEFT" },
  { id: "3", shape: "circle", quadrant: "TOP LEFT" },
  { id: "4", shape: "circle", quadrant: "TOP LEFT" },
  { id: "5", shape: "circle", quadrant: "TOP LEFT" },
];

function App() {
  //setShapes is used to update shapes
  const [shapes, setShapes] = useState(INITIAL_SHAPES);
  return (
    //h-dvh and w-dvw give responsiveness
    <div className="grid grid-cols-2 bg-gray-700 h-dvh w-dvw">
    <div>hi</div>
    <div>Hello World!</div>
    </div>
  )
}

export default App
