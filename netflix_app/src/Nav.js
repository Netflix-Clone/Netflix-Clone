import React from "react";
import "./Nav.css";



function Nav() {
    // const [show, handleshow] = useState(false);

    // useEffect(
    //     () => {
    //         window.addEventListener("scroll", () => {
    //             if (window.scrollY > 100) {
    //                 handleshow(true);
    //             } else handleshow(false);
    //         });
    //         return () => {
    //             window.removeEventListener("scroll");
    //         };
    //     }, []);
    return (
        <div className="nav">
            <img className="nav_logo"
            src="https://upload.wikimdia.org/wikipedia/commons/0/0f/"
            alt="Netflix Logo"
            />
            <img 
              className="nav_avatar"
              src="https://pbs.twimg.com"
              alt="Netflix Logo"
              />

        </div>
    )
}

export default Nav