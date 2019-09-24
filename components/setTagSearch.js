import React,{Component} from 'react';
import {isEqual} from 'lodash/lang';
import {is_Array, is_Object} from '../helper';

class SetTagSearch extends React.Component{

    state = {
        name: "",
        position: "",
        index: -1
    }

    // handleSubmit=(e)=>{
    //     e.preventDefault();
    //     const {name, position, index} = this.state;
    //     const {saveTagSearch, greatestValue, filters} = this.props;
    //     let elemIndex;
        
    //     function takeValue(obj={}){
    //         filters.forEach(item=>{
    //             if(item['checked']){
    //                 if(is_Array(item['checked']) && item['checked'].length){
    //                     obj[item['param']] = item['checked']; 
    //                 }
    //                 if(is_Object(item['checked']) && Object.keys(item['checked']).length){
    //                     obj[item['param']] = item['checked'].value; 
    //                 }
                
    //             }
    //         })
    //         return obj
    //     } 
        
    //     for(var i = 0; i < greatestValue.length; i++){
    //         if(isEqual(greatestValue[i].value, takeValue())){
    //             elemIndex = i
    //             break;
    //         }else{
    //             elemIndex = -1
    //         }
    //     }


    //     if(elemIndex >= 0){
    //         this.setState({
    //             index: elemIndex
    //         })

    //     }else{
    //          saveTagSearch({"title": name, "position": position*1, "value": takeValue()})

    //         this.setState({
    //             name: "",
    //             position: "",
    //             index: -1
    //         })
    //     }
       
    // }
    // handleChange=({target})=>{
    //     this.setState({
    //         [target.name]: target.value,
    //     })
    // }
    render(){
    const {togglePopUp, greatestValue} = this.props;
    const {name, position, index} = this.state 
        return(
            <React.Fragment>
                <form className="setTag" onSubmit={this.handleSubmit}>
                    {(index >= 0) ?
                        <React.Fragment>
                            <p>Фильтр с указанными параметрами уже существует {greatestValue[index]['title']}</p>
                            <button onClick={togglePopUp}>Отмена</button>
                        </React.Fragment>
                                            
                    :                    
                        <React.Fragment>
                            <label for="name">
                                Введите название тега поиска
                            </label>
                            <input name="name" onChange={this.handleChange} value={this.state.name} ></input>
                            <label for="position">
                                Ведите номер позиции тега
                            </label>
                            <input name="position" onChange={this.handleChange} value={this.state.position}  type="number" min="1" max={greatestValue.length ? greatestValue.length+1 : ""}></input>
                            <button disabled={name === "" || position === ""} style={(name === "" || position === "") ? {"backgroundColor": "#daded8"} : null}>Cохранить</button>
                            <button onClick={togglePopUp}>Отмена</button>
                        </React.Fragment>
    
                    }                  
                </form>
            </React.Fragment>
        )
    }
}

export default SetTagSearch;