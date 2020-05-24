import React from 'react';

class DifficultButton extends React.Component {
    render() {
      
        return(
            <button style={{width:this.props.width,height:this.props.height,backgroundColor:this.props.backgroundColor}}>
              {this.props.param}
            </button>
            
        );
     }
    }
export default DifficultButton;