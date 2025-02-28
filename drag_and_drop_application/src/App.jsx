import { useState } from "react";
import "./App.css";
import { Quadrant } from "./components/Quadrant";
import { DndContext } from "@dnd-kit/core";

// quadrant information
const QUADRANTS = [
    { id: "TOP LEFT", title: "Circles", shape: "circle" },
    { id: "TOP RIGHT", title: "Hexagons", shape: "hexagon" },
    { id: "BOTTOM LEFT", title: "Squares", shape: "square" },
    { id: "BOTTOM RIGHT", title: "Triangles", shape: "triangle" },
];

// shapes initial state information
const INITIAL_SHAPES = [
    { id: "1", shape: "circle", quadrant: "TOP LEFT" },
    { id: "2", shape: "circle", quadrant: "TOP LEFT" },
    { id: "3", shape: "circle", quadrant: "TOP LEFT" },
    { id: "4", shape: "circle", quadrant: "TOP LEFT" },
    { id: "5", shape: "circle", quadrant: "TOP LEFT" },
];

export default function App() {
    //setShapes updates state of shapes. Initially set to INITIAL_SHAPES   
    const [shapes, setShapes] = useState(INITIAL_SHAPES);

    //function to update information after end of drag movement
    function handleDragEnd(event) {

        const { active, over } = event;

        //if drag is ongoing exit function
        if (!over) {
          return;
        }
        // ID of the dragged shape
        const shapeId = active.id; 
        // ID of new quadrant
        const newQuadrant = over.id; 

        // get shape of new quadrant
        const newShape = QUADRANTS.find(q => q.id === newQuadrant).shape // find method to get correct quadrant.shape

        // update shapes state. PrevShapes is the previous state of shapes
        // set shape to NewShape and quadrant to NewQuadrant
        setShapes((prevShapes) =>
            prevShapes.map((shape) =>
                shape.id === shapeId ? { ...shape, shape: newShape, quadrant: newQuadrant } : shape
            )
        );
    }

    return (
      //2 column grid used to make quadrants. 
        <div className="grid grid-cols-2 bg-gray-700 h-dvh w-dvw">
          {/* DndContext required to implement drag and drop */}
            <DndContext onDragEnd={handleDragEnd}>
              {/* Quadrants height and width set to 1/2 of the grid to make them equal */}
              {/* Get each quadrant and display only the shapes currently in that quadrant */}
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
