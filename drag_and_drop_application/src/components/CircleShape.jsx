import circle_icon from "../assets/circle_icon-removebg.png";

// Circle shape component using image
export function CircleShape() {
    return (
        <div className=" justify-center items-center ">
        <img src={circle_icon} alt="circle" className="object-contain w-10/12"/>
    </div>
    );
}