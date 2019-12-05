import React from 'react';
import Select from './select';
import data from '../data/select';
import {connect} from 'react-redux';
import {selectFilter} from '../action/select';

const selectFitlers = (props) => {
    
    const {selectFilter} = props;
    return(
        <React.Fragment>
            {data[0].filters.map((item,key)=> {
                return(
                    <React.Fragment key={key}>
                        <Select
                            data={data[0][item]}
                            handler={selectFilter}
                            param={item}

                        />
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default connect(null,{selectFilter})(selectFitlers)