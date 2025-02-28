

export function DraggableShape({ shape }) {
    {/*currently only displaying div*/}
   return (
         <div className="p-4 border-2 border-blue-600 bg-red-200 h-full">
         <h2 className="mb-4 font-semibold text-black text-center">{shape.shape}</h2>
        </div>
   );
};