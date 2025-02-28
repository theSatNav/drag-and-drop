import hex_icon from '../assets/hexagon_icon-removebg.png';

export function HexShape() {
    return (
        <div className="flex justify-center items-center 
        ">
        <img src={hex_icon} alt="hexagon" className="object-contain w-10/12"/>
    </div>
    );
}