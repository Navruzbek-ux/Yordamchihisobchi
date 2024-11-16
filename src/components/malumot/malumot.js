import React from 'react';
import './malumot.css'
import Logo from "./bug-600x450.png"
const Malumot=()=> {
    return (
        <div>
            <div className='malumot'>
                <img className='img3' src={Logo} alt=""/>
                <h3 style={{fontSize:50,color:"red",textAlign:"center"}}>Ushbu dastur:</h3>
                <h4 className='h4'>                Buxgalteriya hisob-kitoblari va soliqlarni
                    qo'lda qilish ko'p vaqt va xatolarga sabab bo'ladi.
                    Ushbu dastur avtomatlashtirilgan buxgalteriya dasturi boʻlib,
                    har bir hisob-kitobni osonlashtiradi va kichik bizneslar uchun oson
                    buxgalteriya yechimlari yaratishda yordam beradi.
                </h4>
            </div>
        </div>
    );
}

export default Malumot;