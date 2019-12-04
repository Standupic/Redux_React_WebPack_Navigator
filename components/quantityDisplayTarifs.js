import React,{useEffect} from "react";
import {connect} from 'react-redux';
import {setQuantityTarifs} from '../action/pagination';

const QuantityDisplayTarifs = (props) =>{
    var anStyler;
    useEffect(()=>{
    	$(anStyler).styler({
			onSelectClosed: ()=>{
				props.setQuantityTarifs(anStyler.value)
			},
		}); 
    })

    return(
        <select className="an-styler" ref={(el) => anStyler = el}>
            <option defaultValue>Кол-во отобр. стр.</option>
            <option>8</option>
            <option>18</option>
            <option>24</option>
            <option>48</option>
        </select>
    )
	
}

export default connect(
    null,
    {setQuantityTarifs})(QuantityDisplayTarifs);