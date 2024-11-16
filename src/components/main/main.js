import React, {useEffect} from 'react';
import "./main.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Logo1 from "./Bank.jpg"
import Logo3 from "./920__95_2243730106.jpg"
import Logo4 from "./1400__100_1411534875.jpg"
import Logo5 from "./vLF5OU16880283060123_b.jpg"
import Logo6 from "./factory.webp"
import Logo7 from "./122738_b54df616db9974afe1752fe1212a.jpg"
import Logo10 from "./152204_ae8e93568ecd1a7d56b3e8dca487.jpg"
import Logo11 from "./f_aNRBtlGGvsJq1FbMbcY1ICRs8BoS6a.jpg"
import Logo12 from "./41_MgtSyFOtr-6zIV-C0khd7c3-UvgSW.jpg"
import {Card} from "@mui/material";
import Link from "@mui/material/Link";



const Main =()=> {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <nav >

            <div className='nnnn' style={{display:"flex",flexDirection:"row",marginTop:50}}>
                <Card className="div1">
                    <img className="img1" src={Logo1} alt=""/>
                    <Link to={'content'}>
                        <h4 style={{marginTop:10,textAlign:"center"}}><Link href={'/bank'}>Bank</Link></h4>

                    </Link>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo3} alt=""/>
                    <h4 style={{marginTop:10,textAlign:"center"}}>Xaridlar</h4>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo4} alt=""/>
                    <h4 style={{marginTop:10,textAlign:"center"}}>Savdolar</h4>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo5} alt=""/>
                    <h4 style={{marginTop:10,textAlign:"center"}}>Ombor</h4>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo6} alt=""/>
                    <h6 style={{marginTop:10,textAlign:"center"}}>Ishlab chiqarish</h6>

                </Card>
            </div>
            <div className='nnnn' style={{display:"flex",flexDirection:"row",marginTop:120}}>
                <Card className="div1">
                    <img className="img1" src={Logo7} alt=""/>
                    <h6 style={{marginTop:10,textAlign:"center"}}>Asosiy vosita </h6>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo10} alt=""/>
                    <h4 style={{marginTop:10,textAlign:"center",fontSize:20}}>Ish haqqi</h4>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo11} alt=""/>
                    <h6 style={{marginTop:10,textAlign:"center"}}>Prognozlash</h6>

                </Card>
                <Card className="div1">
                    <img className="img1" src={Logo12} alt=""/>
                    <h4 style={{marginTop:10,textAlign:"center"}}>Hisobot</h4>

                </Card>
            </div>

        </nav>
    );
}

export default Main;