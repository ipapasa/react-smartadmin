import React from 'react';

export default class RequestTableHeader extends React.Component {

  render(){
    return(
      <a>
          {this.props.headername}
          <span className="fa fa-caret-down"></span>
          <span className="fa fa-caret-up"></span>
      </a>
    )
  }

}
