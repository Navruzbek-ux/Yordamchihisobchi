import React from 'react';
import Logo from "./aloqa.jpg";
import './murojat.css';
import { FaPhone, } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Murojat =()=> {
    return (
        <div>
            <div className='malumot'>
                <img className='img3' src={Logo} alt=""/>
                <h3 style={{fontSize:50,color:"red",textAlign:"center"}}>Murojat uchun malumotlar!!!</h3>
                <h4 className='h4'>
                    <FaPhone /> +998999487002
                </h4>
                <h4 className='h4'>
                    <FaPhone />+998979547279
                </h4>
                <h4 className='h4'>
                    <SiGmail />

                    kamolabotirova1801@gmail.com
                </h4>
                <h4 className='h4'>
                    <SiGmail />
                    navruznorboboyev2@gmail.com
                </h4>
            </div>

        </div>
    );
}

export default Murojat;