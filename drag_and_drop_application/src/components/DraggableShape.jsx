import { useDraggable } from "@dnd-kit/core";
import { SqShape } from "./SquareShape";
import { TriShape } from "./TriangleShape";
import { CircleShape } from "./CircleShape";
import { HexShape } from "./HexagonShape";

// function to create draggable shapes
export function DraggableShape({ shape }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: shape.id,
        data: { type: "shape" }, 
    });

    // transform takes x,y coordinates of where it is moved to
    const style = transform
        ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
        : undefined;
    // shapeImg function  displays the correct component with image depending on shape field of shape
    const shapeImg = () => {
        switch (shape.shape) {
            case "circle":
              return <CircleShape />;
            case "hexagon":
              return <HexShape />;
            case "square":
              return <SqShape />;
            case "triangle":
              return <TriShape />;
            default:
              return null;}
    };

    return (
        //shapeImg() displays shape image file
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="cursor-grab"
            style={style}
        >
         {shapeImg()}   
        </div>
    );
}
