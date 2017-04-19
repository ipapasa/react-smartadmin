import React from 'react';

export default class RequestTableHeader extends React.Component {

  render(){
    return(
      <a onClick={this.props.orderRequest}>
          {this.props.headerName}
          {this.props.orderColumn === this.props.headerName && this.props.orderBy === "asc" &&
            <span className="fa fa-caret-down"></span>
          }
          {this.props.orderColumn === this.props.headerName && this.props.orderBy === "desc" &&
            <span className="fa fa-caret-up"></span>
          }
      </a>
    )
  }

}
