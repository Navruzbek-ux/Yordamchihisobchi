import React, {useEffect} from 'react';
import "./navbar.css"
import Button from "@mui/material/Button";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from "@mui/material/Link";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Card from "@mui/material/Card";

const Navbar =()=> {
    useEffect(() => {
        AOS.init({})
    }, [])

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    return (
        <div>


        <Card style={{height:900}} className="bg">
            <Stack className='button4' spacing={2} direction="row">
                <BootstrapButton className='button2' variant="contained" disableRipple>
                   <Link href="/malumot">Biz haqimizda!!!</Link>
                </BootstrapButton>
                <BootstrapButton className='button3' variant="contained" disableRipple>
             <Link href='/murojat'> Murojatlar uchun</Link>
                </BootstrapButton>
            </Stack>

            <nav data-aos="fade-up" data-aos-duration='3000'className='nav'>


    <div  className='div'>
        <h1 style={{fontSize:"150px",    textShadow: '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
        }}>Yordamchi Hisobchi</h1>
        <h3 style={{width:500,color:"white"}}>Biz bilan buxalterya muhitga moslashing</h3>
            <Link to={"content"}>
            <Button className="button1" variant="contained" >
                <Link href="/register" style={{color:"white"}}>Ro`yxatdan o`tish</Link>

            </Button>

            <Button className="button" variant="contained" >
                              <Link href="/kirish" style={{color:"white"}}> Kirish </Link>

            </Button>
        </Link>

    </div>

</nav>
        </Card>
        </div>

    );
}

export default Navbar;