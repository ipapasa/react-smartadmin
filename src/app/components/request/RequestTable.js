import React from 'react';

import RequestTableHeader from './RequestTableHeader';
import RequestItem from './RequestItem';

export default class RequestTable extends React.Component {

  render(){
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <td>
                      <RequestTableHeader headername="Reference" />
                  </td>
                  <td>
                      <RequestTableHeader headername="Request Type" />
                  </td>
                  <td>
                      <RequestTableHeader headername="ClientCode" />
                  </td>
                  <td>
                      <RequestTableHeader headername="AddedBy" />
                  </td>
                  <td>
                      <RequestTableHeader headername="DateTime Added" />
                  </td>
                  <td>
                      <RequestTableHeader headername="Status" />
                  </td>
                  <td></td>
              </tr>
          </thead>
          <tbody>
          {this.props.requests.map(x => {
            return (
              <RequestItem r={x} />
            )
          })}
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="6">
                      <div className="pagination">
                          Page 1 of 3
                          <a>
                              <i className="fa fa-chevron-left fa-fw"></i>
                          </a>
                          <a>
                              <i className="fa fa-chevron-right fa-fw"></i>
                          </a>
                      </div>
                  </td>
              </tr>
          </tfoot>
      </table>
    )
  }

}
