import React from "react";
import PropTypes from 'prop-types';
import Sort from './sort';
import Search from './search';
import QuantityDisplayTarifs from './quantityDisplayTarifs';
import { connect } from "react-redux";
import Loader from './loader';
import {showModal} from '../action/modal';
import {createSelectorData} from '../selectors';


const HeaderFilter = (props) =>{
        const {loading,showModal,data} = props;
        return(
            <div>
                {loading ?
                 <Loader/>
                 :
                 <div className="an-navigator-section-2-nav">
                        <div className="an-section-title">Тарифы 
                <span className="an-section-title-count">{data.length}</span>
                        </div>
                            <Search/>
                            <Sort/>
                            <QuantityDisplayTarifs/>
                        <div className="an-section-2-settings">
                            <img 
                                src="../dist/img/an-navigator-setings.svg" 
                                className="an-navigator-setings"
                                onClick={(id)=>{showModal(false)}}/>
                        </div>
                    </div>
                }
            </div>
        )
    }

// HeaderFilter.propTypes = {
// 	data: PropTypes.array.isRequired,
// 	headerModalCheck: PropTypes.func.isRequired,
// 	search: PropTypes.func.isRequired,
//     handleSort: PropTypes.func.isRequired,
//     toggleModal: PropTypes.func.isRequired,
//     handlePaginationCountTarifs: PropTypes.func.isRequired
// }

export default connect((state) =>({
    data: createSelectorData(state),
    loading: state.data.loading

}),{showModal})(HeaderFilter)