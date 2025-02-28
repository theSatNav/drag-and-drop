import { useDraggable } from "@dnd-kit/core";


export function DraggableShape({ shape }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: shape.id,
        data: { type: "shape" }, 
    });

    const style = transform
        ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="cursor-grab"
            style={style}
        >
        {shape.shape}  
        </div>
    );
}
