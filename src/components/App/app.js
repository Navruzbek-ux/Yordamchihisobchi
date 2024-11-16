import React from 'react';
import './app.css'
import Navbar from "../navbar/navbar";
import './app.css'
import Main from "../main/main";
import {Route, Routes} from 'react-router-dom'
import Footer from "../footer/footer";
import Registration from "../register/Registration";
import Krish from "../kirish/Kirish";
import Malumot from "../malumot/malumot";
import Stack from "@mui/material/Stack";
import Murojat from "../murojat/murojat";
import Bank from "../Bank/bank";


const App = () => {
    return (
        <div>
            <Stack>
                <Navbar/>
                <Routes>

                    <Route path='/register' element={<Registration/>}/>
                    <Route path='/kirish' element={<Krish/>}/>
                    <Route path='/malumot' element={<Malumot/>}/>
                    <Route path='/murojat' element={<Murojat/>}/>

                </Routes>

                <Main/>
                <Footer/>
                <Routes>
                    <Route path='/bank' element={<Bank/>}/>
                </Routes>



            </Stack>
        </div>
    );
}

export default App;