import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
// import ListParam from './listParam';
// import ReadMore from './readMore';
// import Pagination from './pagination';

function Modal(props){
    const {toggleHandle,open} = props;
    console.log(open)
    let modal;
    useEffect(()=>{
       function handleKeyUp(e){
            // const {toggleModal} = this.props;
            const keys = {
                27: () => {
                    e.preventDefault();
                    toggleHandle()
                    window.removeEventListener('keyup', handleKeyUp, false);
                }
            }
            if (keys[e.keyCode]) {keys[e.keyCode]()}
        }

        function outSideClick(e){
            // const {toggleModal} = this.props;
            if(!isNil(modal)){
                if(!modal.contains(e.target)){
                    toggleHandle();
                    document.removeEventListener('click', outSideClick, false);
                }
            }
        }
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
					ref={node =>(modal = node)}>
					<div id="popup-ext" className="popup-close"></div>
                    {/* { tarifId ?        
                        <ReadMore data={data} tarifId={tarifId} labels={labels}/>
                        : 
                        <React.Fragment>
                        <ListParam onChange={(e,name)=>{this.props.headerModalCheck(e,name)}}
                                checkboxHideShow={checkboxHideShow}/>
                                <button className="an-navigator-save-btn" onClick={toggleModal}>Сохранить</button>
                        </React.Fragment>            
                    } */}
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
export default Modal;