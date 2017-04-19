import React from 'react';

import RequestTableHeader from './RequestTableHeader';
import RequestItem from './RequestItem';
import RequestTablePager from './RequestTablePager';

export default class RequestTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOrderColumn: 'Reference',
      currentOrderBy: 'asc',
      currentPage: 1,
      totalPage:0,
      pageItems:10,
    }
  }

  orderRequest(column){
    if (this.state.currentOrderColumn !== column) {
        this.setState({
          currentOrderBy:"asc"
          currentOrderColumn: column
        })
    }
    else  if (this.state.currentOrderBy === "desc"){
      this.setState({
        currentOrderBy:"asc"
      })
    }
    else  if (this.state.currentOrderBy === "asc"){
      this.setState({
        currentOrderBy:"desc"
      })
    }

    //this.props.requests

  }

  pagination(page) {
    this.setState({
      currentPage:page
    })
  }

  render(){
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <td>
                      <RequestTableHeader headerName="Reference"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("requestReference")} />
                  </td>
                  <td>
                      <RequestTableHeader headerName="Request Type"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("requestType")} />
                  </td>
                  <td>
                      <RequestTableHeader headerName="ClientCode"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("clientCode")} />
                  </td>
                  <td>
                      <RequestTableHeader headerName="AddedBy"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("addedBy")} />
                  </td>
                  <td>
                      <RequestTableHeader headerName="DateTime Added"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("dateTimeAdded")} />
                  </td>
                  <td>
                      <RequestTableHeader headerName="Status"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("status")} />
                  </td>
                  <td></td>
              </tr>
          </thead>
          <tbody>
          {this.props.requests.map(x => {
            return (
              <RequestItem key={x.requestId} r={x} />
            )
          })}
          </tbody>
          <tfoot>
              <tr>
                  <td colSpan="6">
                      <RequestTablePager
                        currentPage={this.state.currentPage}
                        totalPage={this.state.totalPage}
                        pageNavigation={() => this.pagination(page)}
                        />
                  </td>
              </tr>
          </tfoot>
      </table>
    )
  }

}

RequestTable.defaultProps  = {
}
