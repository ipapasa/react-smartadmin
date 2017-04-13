import React from 'react';

export default class RequestItem extends React.Component {

  render(){
    return(
      <tr>
        <td>{this.props.r.requestReference}</td>
        <td>{this.props.r.requestType}</td>
        <td>{this.props.r.clientCode}</td>
        <td>{this.props.r.addedBy}</td>
        <td>{this.props.r.dateTimeAdded}</td>

        <td>
          {this.props.r.status}
        </td>
        <td>
            <a title="View Detail" alt="View Detail">
                <i className="fa fa-info"></i> View Detail
            </a>
            &nbsp;
            <a>
                <i className="fa fa-file-text"></i>
            </a>
        </td>
      </tr>
    )
  }

}
