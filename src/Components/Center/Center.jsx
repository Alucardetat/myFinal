import React from "react";
import { useOutlet } from "react-router-dom";
import Landing from "../Landing/Landing";

const Center = () => {
    const outlet = useOutlet();
    return (
        <>
        {console.log('outlet', outlet ? true : false)}
        <div id="routeCenter" className="routeBorder">
            {outlet ? outlet : <Landing />}
        </div>
        </>
    );
};

export default Center;