import React from 'react';

import RequestTableHeader from './RequestTableHeader';
import RequestItem from './RequestItem';
import RequestTablePager from './RequestTablePager';

export default class RequestTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOrderColumn: 'requestReference',
      currentOrderBy: 'asc',
      currentPage: 1,
      totalPage: 1,
      pageItems:10,
    }

    this.pagination = this.pagination.bind(this);
  }//end constructor

  componentWillReceiveProps(nextProps) {
    let totalPage = parseInt(nextProps.requests.length / this.state.pageItems) + 1;
    this.setState({
        totalPage:totalPage
    })
  }

  orderRequest(column){
    console.log(column, this.state);
    if (this.state.currentOrderColumn !== column) {
        this.setState({
          currentOrderBy:"asc",
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
                      <RequestTableHeader
                        headerTitle="Reference"
                        headerName="requestReference"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("requestReference")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="Request Type"
                        headerName="requestType"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("requestType")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="ClientCode"
                        headerName="clientCode"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("clientCode")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="AddedBy"
                        headerName="addedBy"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("addedBy")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="DateTime Added"
                        headerName="dateTimeAdded"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("dateTimeAdded")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="Status"
                        headerName="status"
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
                        pageNavigation={this.pagination}
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
