import React,{useEffect,useRef} from 'react';
const Select = (props) => {
    var anStyler = useRef();
    useEffect(()=>{
    	$(anStyler.current).styler({
			onSelectClosed: ()=>{
				props.handler({param: props.param, value: anStyler.current.value})
			},
		}); 
    })
    return(
        <React.Fragment>
        <div className="wrap-an-styler">
            <p>{props.name}</p>
            <select className="an-styler" ref={anStyler}>
                {props.data.map((item,key) => {
                    return(
                        item.default ? 
                        <option defaultValue key={key}>{item.default}</option> 
                        :
                        <option value={item.value} key={key}>{item.text}</option>
                    )
                })}
            </select>   
        </div>
        </React.Fragment>
        
    )
}

export default Select