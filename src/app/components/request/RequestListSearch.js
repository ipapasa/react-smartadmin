import React from 'react';

export default class RequestListSearch extends React.Component {

  render(){
    return(
      <div className="row bottom7">
                    <div className="col-md-4">
                        <ul className="list-inline">
                            <li><a>All Requests</a></li>
                            <li><a>My Requests</a></li>
                            <li><a><i className=" fa fa-refresh"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline">
                            <li>
                                Request Type:
                                <select className="text-primary padding3">
                                    <option value="">All</option>
                                </select>

                                Status:
                                <select className="text-primary padding3">
                                    <option value="">All</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-md-offset-1 pull-right">
                        <input type="text" className="form-control input-sm" placeholder="Search by request Reference..." />
                    </div>
                </div>
    )
  }

}
