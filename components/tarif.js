import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {getSameHeightTarifs,setSameHeightTarifs,isEmpty} from '../helper';
import {connect} from 'react-redux';
import Loader from "./loader";
import {showModal} from '../action/modal';
import {createSelectorDivided,isFiltering} from '../selectors';


function Tarif(props){
    const { 
        hideShowData,
        labels,
        showModal,
        filtering,
        data,
        search,
        loading} = props;
    if(data.length){
        useEffect(() => {
            if(!document.querySelector(".wrap_tarifs")) return
            let obj = getSameHeightTarifs(document.querySelector(".wrap_tarifs"));
            setSameHeightTarifs(".an-navigator-compare-options-header").
            forEach(elem => {elem.style.minHeight = `${obj.headerHeight}px`});

            setSameHeightTarifs(".an-navigator-compare-options-list").
            forEach(elem => {elem.style.minHeight = `${obj.listHeight}px`});
        });
    }
		return(
            <React.Fragment>
                {loading ? 
                    <Loader/>
                :
            <div className="wrap_tarifs">
                {
                    (!data.length && !isEmpty(filtering) || (!data.length && search !== "")) ?
                    <p>Результат вашего поиска: {`${!data.length ? 0 : null}`}</p>
                    :
                    data.map((item,key)=>{
                        return(
                            <div className="an-navigator-compare-options" key={item.id}> 
                                <div className="an-navigator-compare-options-header">
                                    {
                                        (item.archive == "Действующий") ? 
                                        <span className="an-no-pub au-orange">{item.archive}</span>
                                    : 
                                        <span className="an-archive">{item.archive}</span>
                                    }
                                    {
                                        (item.internettv == "Интернет") ? 
                                        <span className="an-no-pub au-magenta">{item.internettv}</span>
                                    : 
                                        <span className="an-no-pub au-blue">{item.internettv}</span>
                                    }
                                    <span className="an-navigator-compare-options-header-title">{item.nametariflk}</span>
                                    {/* {
                                        (!hideShowData['nametariflk']) ? 
                                        <span className="an-navigator-compare-options-header-title">{item.nametariflk}</span>
                                        : 
                                        ""
                                    } */}
                                    <span className="an-navigator-option-more" onClick={(id)=>{showModal(item.id)}}>Подробные условия</span>
                                </div>
                                <div className="an-navigator-compare-options-header-s"></div>
                                <div className="an-navigator-compare-options-list">
                                <div className="wrap-list">
                                { Object.entries(item).map((val,k)=>{
                                        {  
                                            if (val[0] !== "id" && hideShowData.get(val[0]) && !hideShowData.get(val[0]).read_more && typeof val[1] === 'object') {
                                            return(
                                                <div className="an-navigator-compare-row" key={k}>
                                                    <div className="an-navigator-compare-col">{labels.get(val[0])}</div>
                                                    <div className="an-navigator-compare-col">{val[1].join(", ")}</div>
                                                </div>

                                            ) 
                                            } 
                                            if (val[0] !== "id" && hideShowData.get(val[0]) && !hideShowData.get(val[0]).read_more && typeof val[1] !== 'object') {
                                            return(
                                                <div className="an-navigator-compare-row" key={k}>
                                                    <div className="an-navigator-compare-col">{labels.get(val[0])}</div>
                                                    <div className="an-navigator-compare-col">{val[1]}</div>
                                                </div>

                                            ) 
                                            }
                                            
                                        }
                                    
                                    }) 
                                } 
                                </div>
                                <div className="wrap-bottom">
                                    {/* {
                                        (!hideShowData['onetimepayment']) ?
                                        <div className="an-navigator-sum">
                                            <p>{item.speed} <span className="">мб/сек</span></p>
                                            <p>{item.onetimepayment} <span className="rub-font-b">/мес</span></p>
                                        </div>
                                        :
                                        ""
                                    } */}
                                    <div className="an-navigator-sum">
                                            <p>{item.speed} <span className="">мб/сек</span></p>
                                            <p>{item.navigatorprice} <span className="rub-font-b">/мес</span></p>
                                        </div>
                                    {/* <div className="an-navigator-compare-toggle an-toggle">
                                        <img src="/navigator/img/an-navigator-tv.svg" className="an-navigator-tv"/>
                                        <span className="an-an-navigator-compare-toggle-name">Добавить ТВ</span>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="an-navigator-compare-toggle an-toggle">
                                        <img src="/navigator/img/an-navigator-tv.svg" className="an-navigator-tv"/>
                                        <span className="an-an-navigator-compare-toggle-name">Добавить ТВ</span>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="an-navigator-compare-toggle an-toggle">
                                        <img src="/navigator/img/an-navigator-tv.svg" className="an-navigator-tv"/>
                                        <span className="an-an-navigator-compare-toggle-name">Добавить ТВ</span>
                                        <input type="checkbox"/>
                                    </div> */}
                                    {/* <button className="an-navigator-compare-btn">Подключить</button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            }
         </React.Fragment>
		)
	}

// Tarif.propTypes = {
//   data: PropTypes.array.isRequired,
//   toggleModal: PropTypes.func.isRequired,
//   hideShowData: PropTypes.array.isRequired,
//   filtering: PropTypes.bool.isRequired,
//   filteredData: PropTypes.array.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   countTarifs: PropTypes.number.isRequired,
//   labels: PropTypes.array.isRequired,
//   toggleModalGetTarifId: PropTypes.func.isRequired
// }

export default connect((state) => ({
    data: createSelectorDivided(state).data,
    filtering: isFiltering(state),
    hideShowData: state.data.hideShowData,
    labels: state.data.labels,
    search: state.search.search,
    loading: state.loading
   
}),{showModal})(Tarif);
