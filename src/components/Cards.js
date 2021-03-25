import React from 'react';
import CardItem from './CardItem';
import '../css/Cards.css';


const Cards = () => {
    return(
        <div className="cards">
            <h1>Check this out</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem 
                            src="/img/business/finance-montreal.png"
                            text="Finance Montreal"
                            label="Preview"
                            path="/services"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;