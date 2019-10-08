import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {separator,getSameHeightTarifs,setSameHeightTarifs} from '../helper';
// import LoaderHoc from './loaderHoc';
import {connect} from 'react-redux';
import Loader from "./loader";
import {getTarifId} from "../action/getTarifId";


function Tarif(props){
    const {data, 
        hideShowData, 
        filtering,
        filteredData,
        currentPage, 
        countTarifs, 
        labels,getTarifId,
        loading} = props;
    // const renderData = filtering ? !filteredData.length ? data : filteredData : data
    const renderData = filtering ? filteredData : data
    const currentTarifsObject = separator(renderData, currentPage, countTarifs)
    const {divided} = currentTarifsObject;

    if(divided.length){
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
                    !divided.length ?
                    <p>Результат вашего поиска: {`${!divided.length ? 0 : divided.length}`}</p>
                    :
                    divided.map((item,key)=>{
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
                                    <span className="an-navigator-option-more" onClick={(id)=>{getTarifId(item.id)}}>Подробные условия</span>
                                </div>
                                <div className="an-navigator-compare-options-header-s"></div>
                                <div className="an-navigator-compare-options-list">
                                <div className="wrap-list">
                                { Object.entries(item).map((val,k)=>{
                                    
                                        {  
                                            if (val[0] !== "id" && !hideShowData[val[0]] && typeof val[1] === 'object') {
                                            return(
                                                <div className="an-navigator-compare-row" key={k}>
                                                    <div className="an-navigator-compare-col">{labels[val[0]]}</div>
                                                    <div className="an-navigator-compare-col">{val[1].join(", ")}</div>
                                                </div>

                                            ) 
                                            } 
                                            if (val[0] !== "id" &&  !hideShowData[val[0]] && typeof val[1] !== 'object') {
                                            return(
                                                <div className="an-navigator-compare-row" key={k}>
                                                    <div className="an-navigator-compare-col">{labels[val[0]]}</div>
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
                                            <p>{item.onetimepayment} <span className="rub-font-b">/мес</span></p>
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

export default connect((state)=>{
    const {data,
           hideShowData,
           labels,
           loading} = state.data;
    const {filtering} = state;
    const {countTarifs,
           currentPage,
           currentSectionPages} = state.pagination;
    return {
        data,
        filtering,
        hideShowData,
        labels,
        countTarifs,
        currentPage,
        currentSectionPages,
        filteredData: [],
        loading
    }
},{getTarifId})(Tarif);