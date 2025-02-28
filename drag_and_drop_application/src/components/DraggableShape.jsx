import { useDraggable } from "@dnd-kit/core";
import { SqShape } from "./SquareShape";
import { TriShape } from "./TriangleShape";
import { CircleShape } from "./CircleShape";
import { HexShape } from "./HexagonShape";


export function DraggableShape({ shape }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: shape.id,
        data: { type: "shape" }, 
    });

    const style = transform
        ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
        : undefined;

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
