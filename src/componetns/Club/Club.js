import React, { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import Sidebar from '../Sidebar/Sidebar';

const Club = () => {

    useEffect(()=>{
        fetch('fake_data.json')
        .then(res => res.json())
        .then(data => setCardList(data))
    }, []) //1st Anonimous Function, 2 parameter dependency inject


    const [cardLists, setCardList] = useState([]); 

    const [cart, setCart] = useState([]); 
    // let [excerciseTime, setExcerciseTime] = useState(0); 


    const handleAddToCart = (data) =>{
        const newCart = [...cart, data];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-9" style={{backgroundColor:"#F2F3FB"}}>
                    <CardList cardLists={cardLists} handleAddToCart = {handleAddToCart}></CardList>
                </div>
                <div className="col-md-3">
                    <Sidebar cart={cart}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Club;