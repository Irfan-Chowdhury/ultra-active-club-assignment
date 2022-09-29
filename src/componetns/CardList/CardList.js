import React from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';

const CardList = ({cardLists, handleAddToCart}) => {

    return (
        <div className='container mt-5 mx-5 text-start'>
            <div class="d-flex flex-row bd-highlight mb-3">
                <div><FontAwesomeIcon icon={faHelmetSafety}></FontAwesomeIcon></div>
                <div className='mx-3'><h3>Fantasy Club</h3></div>
            </div>
        
            <h5>Select Today's Collection</h5>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cardLists.map(cardList => <Card 
                        key={cardList.id} 
                        cardList={cardList}
                        handleAddToCart = {handleAddToCart}
                        ></Card>)
                }
            </div>
        </div>
    );
};

export default CardList;