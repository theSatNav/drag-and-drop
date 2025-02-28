import sq_icon from '../assets/square_icon-removebg.png';

// Square shape component using image
export function SqShape() {
    return (
        <div className="flex justify-center items-center 
        ">
        <img src={sq_icon} alt="square" className="object-contain w-10/12"/>
    </div>
    );
}