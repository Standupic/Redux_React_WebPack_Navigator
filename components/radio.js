import React from "react";
import PropTypes from 'prop-types';


const Radio = (props) =>{
     const {values,name,param,checked,
            methodes} = props;
     const {handler,reset} = methodes;
    return(
            <div className="radio-group parser_main_pakets">
            <form>
                {values.map((item,key)=>{
                return(
                    <React.Fragment key={key}>
                
                        <input 	name={`${param}`} type="radio" id={`${param}${key}`}
                                value={item}
                                onChange={(obj)=>{handler({'param':param,'value': item})}}
                                checked={checked[param].indexOf(item) >= 0 ? true : false}
                                />
                        <label htmlFor={`${param}${key}`}>
                            <span className="out-dot">
                                <div className="in-dot"></div>
                            </span>{item}<b></b>
                        </label>
                   
                    </React.Fragment>
                    )
                })}
                <p className="resetRadio" onClick={(obj)=>{reset(param)}}>Сбросить</p>
            </form>
        </div>
    )
}

// Radio.propTypes = {
// 	item: PropTypes.array.isRequired,
// 	name: PropTypes.string.isRequired,
// 	onChange: PropTypes.func.isRequired,
// }

export default Radio;