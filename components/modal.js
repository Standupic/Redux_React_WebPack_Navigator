import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import {hideModal} from '../action/modal';
import ListParam from './listParam';
import ReadMore from './readMore';
// import Pagination from './pagination';

function Modal(props){
    const {hideModal,modal,labels,data,checkboxHideShow} = props;
    const {id} = modal;
    let modalRef = React.createRef();
    function handleKeyUp(e){
        const keys = {
            27: () => {
                e.preventDefault();
                hideModal()
                window.addEventListener('keyup', handleKeyUp, false);
            }
        }
        if (keys[e.keyCode]) {keys[e.keyCode]()}
   }
   function outSideClick(e){
        if(!isNil(modalRef.current)){
            if(!modalRef.current.contains(e.target)){
                hideModal();
                document.addEventListener('click', outSideClick, false);
            }
        }
    }

    useEffect(()=>{
        window.addEventListener('keyup', handleKeyUp, false);
        document.addEventListener('click', outSideClick, false);
        return ()=>{
            window.removeEventListener('keyup', handleKeyUp, false);
	        document.removeEventListener('click', outSideClick, false);
        }
    })
	// render(){
		// const {toggleModal, data, tarifId,labels, checkboxHideShow} = this.props;
		return(
			<div className="modalOverlay">
				<div 
					className="modal"
					ref={modalRef}>
					<div id="popup-ext" className="popup-close" onClick={hideModal}></div>
                        { id ?        
                            <ReadMore 
                                data={data} 
                                tarifId={id} 
                                labels={labels}/>
                            : 
                            <React.Fragment>
                            <ListParam 
                                // onChange={(e,name)=>{this.props.headerModalCheck(e,name)}}
                                checkboxHideShow={checkboxHideShow}/>
                                <button className="an-navigator-save-btn" onClick={hideModal}>Сохранить</button>
                            </React.Fragment>            
                        }
					</div>
				</div>
		    )
	    // }
}

// Pagination.propTypes = {
//     toggleModal: PropTypes.bool.isRequired,
//     data: PropTypes.array.isRequired,
//     tarifId: PropTypes.bool.isRequired,
//     labels: PropTypes.array.isRequired,
//     checkboxHideShow: PropTypes.array.isRequired
// }
export default connect(state=>{
    return{
        modal: state.modal,
        data: state.data.data,
        checkboxHideShow: state.data.checkboxHideShow,
        labels: state.data.labels,
    }
},{hideModal})(Modal);