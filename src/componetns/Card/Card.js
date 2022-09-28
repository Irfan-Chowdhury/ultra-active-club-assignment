import React from 'react';

const Card = ({cardList}) => {
    const {name, description, age, timeRequired, img } = cardList;
    // console.log(cardList)

    return (
        <div className='col'>
            <div className="card" style={{width: "230px"}}>
                <img src={img} style={{height:'150px'}} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">For Age: {age}</p>
                    <p className="card-text">Time Required: {timeRequired}</p>
                    <div className="text-center d-grid gap-2">
                        <button className='btn btn-primary '>Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;