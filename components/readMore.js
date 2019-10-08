import React from 'react';
import PropTypes from 'prop-types';

const ReadMore = (props)=>{
    const {data, tarifId, labels} = props;
    return(
    <React.Fragment>
        {data.map((item,key)=>{
            if(item.id == tarifId){
                return(
                    <React.Fragment>
                    <span class="an-no-pub">{item.public}</span>
                    <span class="an-archive">{item.archive}</span>
                    <span class="an-navigator-compare-options-header-title">{item.nametariflk}</span>
                    <div className="popup-content">
                        { Object.entries(item).map((val,k)=>{
               
                            {  
                                if ( typeof val[1] === 'object') {
                                return(
                                    <div className="an-navigator-compare-row">
                                        <div className="an-navigator-compare-col">{labels[val[0]]}</div>
                                        <div className="an-navigator-compare-col">{val[1].join(", ")}</div>
                                    </div>

                                ) 
                                } 
                                if ( typeof val[1] !== 'object') {
                                return(
                                    <div class="an-navigator-compare-row">
                                        <div class="an-navigator-compare-col">{labels[val[0]]}</div>
                                        <div class="an-navigator-compare-col">{val[1]}</div>
                                    </div>

                                    ) 
                                }
                            } 
                        })}
                    </div>
                    </React.Fragment>
                )
            }
        })}
    </React.Fragment> 
    )
}

// ReadMore.propTypes = {
//     data: PropTypes.array.isRequired,
//     tarifId: PropTypes.number.isRequired,
//     labels: PropTypes.array.isRequired
// }

export default ReadMore 