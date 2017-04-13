import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './requestActions'

import RequestListSearch from './RequestListSearch';
import RequestTable from './RequestTable';

class RequestList extends React.Component {
  constructor(props) {
    super(props);

    this.props.actions.loadRequest();
  }

  render(){
    return(
      <div id="content">
        <div className="row">
          <RequestListSearch />
        </div>
        <div className="row">
          <RequestTable requests={this.props.requests} />
        </div>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    requests: state.requests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( RequestList );
