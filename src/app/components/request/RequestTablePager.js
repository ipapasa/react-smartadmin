import React from 'react';

export default class RequestTablePager extends React.Component {

  render(){
    return(
      <div className="pagination">
          Page {this.props.currentPage} of {this.props.totalPage}
          <a onClick={()=>this.pageNavigation(this.props.currentPage-1)}>
              <i className="fa fa-chevron-left fa-fw"></i>
          </a>
          <a onClick={()=>this.pageNavigation(this.props.currentPage+1)}>
              <i className="fa fa-chevron-right fa-fw"></i>
          </a>
      </div>
    )
  }

}
