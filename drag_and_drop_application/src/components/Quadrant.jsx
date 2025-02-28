import { useDroppable } from "@dnd-kit/core";
import { DraggableShape } from "./DraggableShape";

export function Quadrant({ quadrant, shapes }) {
    const { setNodeRef } = useDroppable({ id: quadrant.id });
    //quadrant contains title of shape and array of shapes
    return (
        <div ref={setNodeRef} className="p-4 border-2 border-gray-200 bg-red-200 h-full">
            <h2 className="mb-4 text-lg text-black text-center">{quadrant.title}</h2>
            <div className="grid grid-cols-3">
                {shapes.map((shape) => (
                    <DraggableShape key={shape.id} shape={shape} />
                ))}
            </div>
        </div>
    );
}
