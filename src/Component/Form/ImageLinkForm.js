import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
    <div>
        <div className="center" >
            <div className = 'form center pa4 br3 shadow-5'>
                    <input id="celeb-name" className="f4 pa2 w-70 center" type="text" onChange={onInputChange} placeholder="enter image url"/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue"
                    onClick={onSubmit} value="Submit">Detect</button>
            </div>
        </div>
    </div>
    );
}

export default ImageLinkForm;
