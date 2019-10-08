import React, {Component} from 'react';

export default (OriginalComponent) => 
    class ToggleOpen extends Component {
        state = {
            open: true
        }
        toggleHandle = () => this.setState({open: !this.state.open})
        render(){
            return(
                <OriginalComponent
                {...this.props}
                toggleHandle={this.toggleHandle}
                open={this.state.open}
                />
            )
        }
    }
