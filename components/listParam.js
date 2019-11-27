import React from 'react';
import Checkbox from './checkbox';
import PropTypes from 'prop-types';


const ListParam=(props)=>{

    const {checkboxHideShow,hideShowParam} = props;

    const defaultParam = {
        "archive": false,
        "internettv": false,
        "nametariflk": false,
        "speed": false,
        "navigatorprice": false
    }

    return(
        <React.Fragment>
            <h3>Параметры</h3>
            <div className="wrap_select option">
                
                {
                    checkboxHideShow.map((item, key)=>{
                        return(
                            <div className="an-navigator-compare-col" key={key}>
                                <input 
                                    type="checkbox"
                                    className='checkbox'
                                    id={key}
                                    checked={defaultParam[item.param] == false ? true : !item.read_more}
                                    onChange={(obj)=>{
                                            if(defaultParam[item.param] == false) return
                                            hideShowParam({'param':item.param,'read_more': !item.read_more})}
                                        }
                                    />
                            <label htmlFor={key}>
                                <span>{item.name}</span>
                            </label>
                            </div>
                        )
                    })
                }
            </div>				
        </React.Fragment>
    )
}

// ListParam.propTypes = {
//     checkboxHideShow: PropTypes.array.isRequired,
//     onChange: PropTypes.func.isRequired
// }

export default ListParam