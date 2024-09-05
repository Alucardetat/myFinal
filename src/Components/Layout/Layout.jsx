import React from "react";
import { useOutlet } from "react-router-dom";
import Center from "../../../../myFinal/src/Components/Center/Center";

const Layout = () => {
    let out = useOutlet();

    return (
        <center>
            {console.log('out', out)}
            {out ? <Outlet /> : <Center />}
        </center>
    );
};

export default Layout;