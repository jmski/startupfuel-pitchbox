import React from 'react';
import { Button } from './Button';
import '../css/Divider.css';

const Divider = () => {
    return(
        <div className="divider-container">
            <div className="divider-download">
                <h1>The PitchBox Marketing Pack</h1>
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

            <div className="divider-pitchbox-grid" >
                <div className="item1"><img src="/img/business/bdc-capital.jpg" alt="bdc capital logo" /></div>
                <div className="item2"><img src="/img/business/finance-montreal.png" alt="finance montreal logo" /></div>
                <div className="item3"><img src="/img/business/inovia.png" alt="inovia logo" /></div>
                <div className="item4"><img src="/img/business/norwest-venture-partners.jpg" alt="norwest ventures logo" /></div>
            </div>
            <div className="divider-pitchbox">
                <p>
                    Lower the overhead expenses and simplify your Angel Network, VC Fund,
                    Corporate Fund, or Startup Accelerator with the PitchBox.
                </p>
                <div className="pitchbox-btns">
                    <Button
                            className="btns"
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium'
                        >
                        View Active PitchBoxes
                    </Button>
                </div>
            </div>
        </div>
    );
}



export default Divider;