import {useState} from 'react';


export const hideShowFilters = () => {
    const [flag, setflag] = useState(false);


    function toggleFlag() {
        setflag(!flag);
    }

    return {
        flag,
        toggleFlag,
    }
};

export const togglePopUp = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};