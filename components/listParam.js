import React from 'react';
import Checkbox from './checkbox';
// import {uniqId} from'./helper';
import PropTypes from 'prop-types';

const ListParam=(props)=>{
    const {checkboxHideShow} = props;
    return(
        <React.Fragment>
            <h3>Параметры</h3>
            <div className="wrap_select option">
                
                {
                    checkboxHideShow.map((item, key)=>{
                        return(
                            <div className="an-navigator-compare-col">
                                <Checkbox
                                    item={item.name}
                                    checked={(!item.hideShow) ? true : null}
                                    key={key}
                                    // onChange={(e,name)=>{onChange(e,item.param)}}
                                    index={`${item.param+key}`}
                                />
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