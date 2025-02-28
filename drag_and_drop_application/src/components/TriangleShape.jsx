import tri_icon from '../assets/triangle_icon-removebg.png';

// Triangle shape component using image
export function TriShape() {
    return (
        <div className="flex justify-center items-center ">
        <img src={tri_icon} alt="triangle" className="object-contain w-10/12" />
    </div>
    );
}