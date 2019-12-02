import {useState} from 'react';

export const togglePopUp = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [flag, setFlag] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    function toggleFlag() {
        setFlag(!flag);
    }
    
    return {
        flag,
        toggleFlag,
        isShowing,
        toggle,
    }
};