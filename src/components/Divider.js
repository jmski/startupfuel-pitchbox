import React from 'react';
import { Button } from './Button';
import '../css/Divider.css';

const Divider = () => {
    return(
        <div className="divider-container">
            <h1>Download the PitchBox Marketing Pack</h1>
            <div className="divider-btns">
                <Button
                    className="btns"
                    buttonStyle='btn--outline' 
                    buttonSize='btn--medium'
                >
                    <i className="fas fa-download" /> Download
                </Button>
            </div>
        </div>
    );
}



export default Divider;