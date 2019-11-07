import React,{Component} from 'react';
import {find} from 'lodash/collection';
import {indexOf} from 'lodash/array';
import {objectChecked} from '../helper';


class createTagFilter extends React.Component{

    state = {
        name: "",
        position: "",
        index: -1
    }

     handleSubmit=(e)=>{
        e.preventDefault();
        const {name, position, index} = this.state;
        const {tags,checked} = this.props;
        let elemIndex = indexOf(Object.values(tags),find(tags, objectChecked(checked)))
        console.log(elemIndex)
        if(elemIndex >= 0){
            this.setState({
                index: elemIndex
            })
        }else{
            // run action to change state of tags
            // clear state of component
        }       
    }

    handleChange= (type) => (ev)=>{
        const {value} = ev.target;
        if(value > limits[type].max) return
        this.setState({
            [type]: value
        })
    }

    isValid = () => ['name','position'].every(this.isValidField)

    isValidField = (type) => this.state[type].length >= limits[type].min

    getClassName = (type) => (this.isValidField(type) ? '' : "form_error")


    render(){
    const {tags,checked, toggle} = this.props;
    const {name, position, index} = this.state 
        return(
            <React.Fragment>
                <form className="setTag" onSubmit={this.handleSubmit}>
                    {(index >= 0) ?
                        <React.Fragment>
                            <p>Фильтр {[index]['title']} уже существует!</p>
                            <button onClick={toggle}>Отмена</button>
                        </React.Fragment>                     
                    :                    
                        <React.Fragment>
                            <label htmlFor="name">
                                Введите название тега поиска
                            </label>
                            <input 
                                name="name" 
                                onChange={this.handleChange('name')} 
                                className={this.getClassName('name')}
                                value={this.state.name}
                            >
                            </input>
                            <label htmlFor="position">
                                Ведите номер позиции тега
                            </label>
                            <input 
                                name="position" 
                                onChange={this.handleChange('position')} 
                                value={this.state.position}  
                                className={this.getClassName('position')}
                                type="number"
                                min="1" max={tags.length ? tags.length+1 : ""}>
                                
                            </input>
                            <button disabled={!this.isValid()}>Cохранить</button>
                            <button onClick={toggle}>Отмена</button>
                        </React.Fragment>
    
                    }                  
                </form>
            </React.Fragment>
        )
    }
    
}

const limits = {
    "name": {
        "min": 5,
        "max": 40
    },
    "position": {
        "min": 1
    }
}

export default createTagFilter;