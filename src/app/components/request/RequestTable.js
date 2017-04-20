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
      requests:[]
    }

    this.pagination = this.pagination.bind(this);
    this.setPage = this.setPage.bind(this);
    this.sorting = this.sorting.bind(this);
  }//end constructor

  componentWillReceiveProps(nextProps) {
    let totalPage = parseInt(nextProps.requests.length / this.state.pageItems) + 1;
    this.setState({
        totalPage:totalPage,
        requests: nextProps.requests
    })
  }

  orderRequest(column, orderby, pageno){

    pageno = pageno || this.state.currentPage;
    orderby = orderby || "asc";

    if (this.state.currentOrderColumn === column && this.state.currentPage === pageno && this.state.currentOrderBy === "desc"){
      orderby = "asc"
    } else if (this.state.currentOrderColumn === column && this.state.currentPage === pageno && this.state.currentOrderBy === "asc"){
      orderby = "desc"
    }

    this.setState({
      currentOrderBy:orderby,
      currentPage:pageno,
      currentOrderColumn: column,
      requests: this.pagination(this.sorting(column, orderby), pageno)
    })

  }

  sorting(column, orderby) {
    let objArray = Object.assign([], this.props.requests);
    if (orderby == "asc") {
      objArray.sort(function(a,b) {return (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0);} )
    }
    if (orderby == "desc") {
      objArray.sort(function(a,b) {return (a[column] < b[column]) ? 1 : ((b[column] < a[column]) ? -1 : 0);} )
    }
    return objArray;
  }

  pagination(items, pageno) {
    console.log(items, pageno);

    let itemlen = this.state.pageItems;
    let pagedArray = items.slice((pageno-1) * itemlen, pageno * itemlen);

    this.setState({
      currentPage:pageno
    })

    return pagedArray;
  }

  setPage(pageno) {
    this.orderRequest(this.state.currentOrderColumn, this.state.currentOrderBy, pageno);
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
                        orderRequest={()=>this.orderRequest("requestReference", this.state.currentOrderBy)} />
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
          {this.state.requests.map(x => {
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
                        pageNavigation={this.setPage}
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