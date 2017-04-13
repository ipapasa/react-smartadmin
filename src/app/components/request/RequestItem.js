import React from 'react';

export default class RequestItem extends React.Component {

  render(){
    return(
      <div id="content">
        <div className="row">
          {this.props.item.requestId}
          {this.props.item.requestReference}
          {this.props.item.requestType}
        </div>
      </div>
    )
  }

}
