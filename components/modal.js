import React,{Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import ListParam from './listParam';
import ReadMore from './readMore';
import Pagination from './pagination';

function Modal(props){

    useEffect(()=>{
       function handleKeyUp(e){
            const {toggleModal} = this.props;
            const keys = {
                27: () => {
                    e.preventDefault();
                    toggleModal()
                    window.removeEventListener('keyup', this.handleKeyUp, false);
                }
            }
            if (keys[e.keyCode]) {keys[e.keyCode]()}
        }

        function outSideClick(e){
            const {toggleModal} = this.props;
            if(!isNil(this.modal)){
                if(!this.modal.contains(e.target)){
                    toggleModal();
                    document.removeEventListener('click', this.outSideClick, false);
                }
            }
        }
        return ()=>{
            window.removeEventListener('keyup', this.handleKeyUp, false);
	        document.removeEventListener('click', this.outSideClick, false);
        }
    })


	handleKeyUp=(e)=>{
		const {toggleModal} = this.props;
		const keys = {
			27: () => {
				e.preventDefault();
				toggleModal()
				window.removeEventListener('keyup', this.handleKeyUp, false);
			}
		}
		if (keys[e.keyCode]) {keys[e.keyCode]()}
	}
	outSideClick=(e)=>{
		const {toggleModal} = this.props;
		if(!isNil(this.modal)){
			if(!this.modal.contains(e.target)){
				toggleModal();
				document.removeEventListener('click', this.outSideClick, false);
			}
		}
	}
	render(){
		const {toggleModal, data, tarifId,labels, checkboxHideShow} = this.props;
		return(
			<div className="modalOverlay">
				<div 
					className="modal"
					ref={node =>(this.modal = node)}>
					<div id="popup-ext" class="popup-close" onClick={toggleModal}></div>
                    { tarifId ?        
                        <ReadMore data={data} tarifId={tarifId} labels={labels}/>
                        : 
                        <React.Fragment>
                        <ListParam onChange={(e,name)=>{this.props.headerModalCheck(e,name)}}
                                checkboxHideShow={checkboxHideShow}/>
                                <button className="an-navigator-save-btn" onClick={toggleModal}>Сохранить</button>
                        </React.Fragment>            
                    }
                    
					</div>
				</div>
		    )
	    }
}

Pagination.propTypes = {
    toggleModal: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    tarifId: PropTypes.bool.isRequired,
    labels: PropTypes.array.isRequired,
    checkboxHideShow: PropTypes.array.isRequired
}
export default ModalHeader;