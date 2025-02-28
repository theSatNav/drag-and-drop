import { DraggableShape } from "./DraggableShape";

export function Quadrant({ quadrant, shapes }) {
    return (
        <div className="p-4 border-2 border-blue-600 bg-red-200 h-full">
        <h2 className="mb-4 font-semibold text-black text-center">{quadrant.title}</h2>
        <div className="">
            {shapes.map((shape) => (
                <DraggableShape key={shape.id} shape={shape} />
            ))}
        </div>
    </div>
    );
}