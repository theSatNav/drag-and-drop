import { useState } from "react";
import "./App.css";
import { Quadrant } from "./components/Quadrant";
import { DndContext } from "@dnd-kit/core";

const QUADRANTS = [
    { id: "TOP LEFT", title: "Circles", shape: "circle" },
    { id: "TOP RIGHT", title: "Hexagons", shape: "hexagon" },
    { id: "BOTTOM LEFT", title: "Squares", shape: "square" },
    { id: "BOTTOM RIGHT", title: "Triangles", shape: "triangle" },
];

const INITIAL_SHAPES = [
    { id: "1", shape: "circle", quadrant: "TOP LEFT" },
    { id: "2", shape: "circle", quadrant: "TOP LEFT" },
    { id: "3", shape: "circle", quadrant: "TOP LEFT" },
    { id: "4", shape: "circle", quadrant: "TOP LEFT" },
    { id: "5", shape: "circle", quadrant: "TOP LEFT" },
];

export default function App() {
    const [shapes, setShapes] = useState(INITIAL_SHAPES);

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over) return;

        const shapeId = active.id; // ID of the dragged shape
        const newQuadrant = over.id; // ID of the quadrant where it was dropped
        const newShape = QUADRANTS.find(q => q.id === newQuadrant).shape // find method to get correct quadrant.shape

        setShapes((prevShapes) =>
            prevShapes.map((shape) =>
                shape.id === shapeId ? { ...shape, shape: newShape, quadrant: newQuadrant } : shape
            )
        );
    }

    return (
        <div className="grid grid-cols-2 bg-gray-700 h-dvh w-dvw">
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
