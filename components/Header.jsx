import { Player } from "@lottiefiles/react-lottie-player";
import { Mouse } from "lucide-react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <>        
        <div className="relative h-screen flex flex-col items-center justify-center">
            {/* Navbar */}
            <div className="absolute top-0 left-0 right-0">
                <NavBar />
            </div>
            {/* Globe animation */}
            <div className="absolute flex flex-col items-center justify-center -z-20">
                <Player
                    autoplay={true}
                    loop={true}
                    controls={false}
                    src="https://assets8.lottiefiles.com/packages/lf20_YN73eT.json"
                    style={{ height: '800px', width: '800px' }}
                ></Player> 
            </div>
            {/* Background overlay */}
            <div className="absolute bg-black opacity-70 inset-0 -z-10"></div>
            {/* Text */}
            <div className="absolute z-0">
                <p className="font-bruno-ace-sc text-9xl text-header-color-1">LET'S <span className="text-header-color-2">B</span>UILD</p>
            </div>
            {/* Mouse */}
            <div className="absolute bottom-10 flex flex-col items-center">
                <Mouse size={48} color="#fff" className="mb-3 animate-bounce" />
                <p>scroll for more</p>
            </div>
        </div>
        </>
    );
}