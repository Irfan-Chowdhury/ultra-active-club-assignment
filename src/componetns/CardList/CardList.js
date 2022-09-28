import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const CardList = () => {
    const [cardLists, setCardList] = useState([]); 

    useEffect(()=>{
        fetch('fake_data.json')
        .then(res => res.json())
        .then(data => setCardList(data))
    }, []) //1st Anonimous Function, 2 parameter dependency inject


    return (
        <div className='container mt-5 mx-5 text-start'>
            <h3>Fantasy Club</h3>
            <h5>Select Today's Excercise</h5>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cardLists.map(cardList => <Card key={cardList.id} cardList={cardList}></Card>)
                }
            </div>
        </div>
    );
};

export default CardList;