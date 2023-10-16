import React from "react";
import web from "../src/images/imag1.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common  name='Grow Your business with' imgsrc={web} visit='/services' btnname='Get Started'/>
        </>
    );
};
export default Home;