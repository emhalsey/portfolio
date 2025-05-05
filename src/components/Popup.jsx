import React from 'react';
import Draggable from 'react-draggable';
import "./components_css/Popup.css"

const Popup = () => {
  // const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='dragdiv'>
                <Draggable>
                    <div>This line can be moved now!</div>
                </Draggable>
            </div>
        </>
    );
};

export default Popup;