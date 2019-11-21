import React,{Component} from 'react';
import {reduce} from 'lodash/collection';
import {isEqual} from 'lodash/lang';
import {getIndexTag,getObjectChecked} from '../helper';
import {toJS} from 'immutable';
import {handlerSetTag} from '../action/tags';
import {connect} from 'react-redux';


class createTagFilter extends React.Component{

    state = {
        name: "",
        position: "",
        index: -1
    }

     handleSubmit=(e)=>{
        e.preventDefault();
        const {name, position, index} = this.state;
        const {tags, checked,handlerSetTag,toggle} = this.props;
        const length =  tags.length;
        if(getIndexTag(tags, checked) >= 0){
            this.setState({
                index: getIndexTag(tags, checked)
            })
        }else{
        const newTag = {
            value: getObjectChecked(checked),
            title: name,
            position: length + 1 <= position ? length + 1 : position * 1 
        }
        handlerSetTag(newTag)
        toggle()
            this.setState({
                name: "",
                position: "",
                index: -1
            })
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
    const {tags,toggle} = this.props;
    const {name, position, index} = this.state;
    console.log(tags)
        return(
            <React.Fragment>
                <form className="setTag" onSubmit={this.handleSubmit}>
                    {(index >= 0) ?
                        <React.Fragment>
                            <p>Фильтр "{tags[index]['title']}" уже существует!</p>
                            <p>Попробуйте воспользоваться уже существующем или создайте новый!</p>
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
                                value={name}
                            >
                            </input>
                            <label htmlFor="position">
                                Ведите номер позиции тега
                            </label>
                            <input 
                                name="position" 
                                onChange={this.handleChange('position')} 
                                value={position}  
                                className={this.getClassName('position')}
                                type="number"
                                min="1" max={tags.length ? tags.length+1 : ""}>
                                
                            </input>
                            <button 
                            disabled={!this.isValid()}
                            >Cохранить</button>
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

export default connect(null,{
    handlerSetTag
})(createTagFilter);