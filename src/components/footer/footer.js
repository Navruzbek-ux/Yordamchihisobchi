import React from 'react';
import "./footer.css"
import {Card} from "@mui/material";
import Logo1 from "../main/Bank.jpg";
import Logo3 from "../main/920__95_2243730106.jpg";
import Logo4 from "../main/1400__100_1411534875.jpg";
import Logo5 from "../main/vLF5OU16880283060123_b.jpg";
import Logo6 from "../main/factory.webp";
import Logo7 from "../main/122738_b54df616db9974afe1752fe1212a.jpg";
import Logo10 from "../main/152204_ae8e93568ecd1a7d56b3e8dca487.jpg";
import Logo11 from './f_aNRBtlGGvsJq1FbMbcY1ICRs8BoS6a.jpg'
import Logo12 from './41_MgtSyFOtr-6zIV-C0khd7c3-UvgSW.jpg'
import Logo13 from './pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
const Footer =()=> {
    return (
        <div className="div2">

            <img style={{width:50,height:50,borderRadius:'50%',marginLeft:60}} src={Logo13} alt=""/>
            <h2 className="text">Kompaniya nomi</h2>
            <div>
                    <Card className="div3">
                        <img className="img2" src={Logo1} alt=""/>
                        <h4 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Bank</h4>

                    </Card>

                    <Card className="div3">
                        <img className="img2" src={Logo3} alt=""/>
                        <h4 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Xaridlar</h4>

                    </Card>
                    <Card className="div3">
                        <img className="img2" src={Logo4} alt=""/>
                        <h4 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Savdolar</h4>

                    </Card>
                    <Card className="div3">
                        <img className="img2" src={Logo5} alt=""/>
                        <h4 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Ombor</h4>

                    </Card>
                    <Card className="div3">
                        <img className="img2" src={Logo6} alt=""/>
                        <h6 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Ishlab chiqarish</h6>

                    </Card>

                    <Card className="div3">
                        <img className="img2" src={Logo7} alt=""/>
                        <h6 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Asosiy vosita </h6>


                    </Card>
                <Card className="div3">
                    <img className="img2" src={Logo10} alt=""/>
                    <h4 style={{marginTop:10,textAlign:"center"}}>Ish haqqi</h4>

                </Card>
                <Card className="div3">
                    <img className="img2" src={Logo11} alt=""/>
                    <h5 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Prognozlash</h5>

                </Card>
                <Card className="div3">
                    <img className="img2" src={Logo12} alt=""/>
                    <h5 style={{marginTop:10,textAlign:"center",marginLeft:20}}>Hisobot</h5>

                </Card>

            </div>


        </div>
    );
}

export default Footer;