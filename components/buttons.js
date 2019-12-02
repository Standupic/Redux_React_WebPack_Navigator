import React from 'react';
import CreateTagFilter from './createTagFilter';
import {togglePopUp} from './custom_hooks';
import PropTypes from 'prop-types';
import Loader from './loader';
import {handlerHideShowFilters,
        handlerResetFilters} from '../action/filters';
import {connect} from 'react-redux';
import {isEmpty} from '../helper';
import {
    isFiltering,
    createSelectorTags,
    createSelectorChecked}
    from '../selectors';


const Buttons = (props) =>{
    const {filtering, 
           loading, 
           tags, 
           checked,
           handlerHideShowFilters,
           handlerResetFilters} = props;
    const {isShowing, toggle, flag, toggleFlag} = togglePopUp();

    return(
        <React.Fragment>
            {loading 
            ? 
            <Loader/>
            :
            <div className="wrap_button_filter">
                {isShowing ? 
                    <CreateTagFilter
                        tags={tags}
                        checked={checked}
                        toggle={toggle}
                    /> : null}
                <button 
                    className={"btn savetag"}
                    onClick={()=>{
                        toggleFlag()
                        handlerHideShowFilters(flag)
                    }}>
                    {!flag ? "Показать все фильтры" : "Скрыть фильтры"}
                </button>
                <button 
                    onClick={handlerResetFilters}
                    className={!isEmpty(filtering) ? "btn resetFilters" : "btn errortag"} 
                    >Сбросить фильтры
                </button>
                <button 
                    disabled={!isEmpty(filtering) ? false : true} 
                    className={!isEmpty(filtering) ? "btn savetag" : "btn errortag"}
                    onClick={toggle}
                    >
                    Сохранить фильтр для быстрого поиска
                </button>
            </div>
            }
        </React.Fragment>
    )
}

Buttons.propTypes = {
    filtering: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    checked: PropTypes.object.isRequired,
    handlerHideShowFilters: PropTypes.func.isRequired,
    handlerResetFilters: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default connect((state)=>({
    filtering: isFiltering(state),
    tags: createSelectorTags(state),
    checked: createSelectorChecked(state),
    loading: state.data.loading
}),{handlerHideShowFilters,
    handlerResetFilters})(Buttons)