import React,{useEffect} from 'react';
const Select = (props) => {
    var anStyler;
    useEffect(()=>{
    	$(anStyler).styler({
			onSelectClosed: ()=>{
				props.handler({param: props.param, value: anStyler.value})
			},
		}); 
    })
    return(
        <React.Fragment>
        <select className="an-styler" ref={(el) => anStyler = el}>
            {props.data.map((item,key) => {
                return(
                    item.default ? 
                    <option defaultValue key={key}>{item.default}</option> 
                    :
                    <option value={item.value} key={key}>{item.text}</option>
                )
            })}
        </select>  
        </React.Fragment>
        
    )
}

export default Select