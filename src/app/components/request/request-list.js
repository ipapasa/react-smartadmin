import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './requestActions'

import RequestItem from './RequestItem';

class RequestList extends React.Component {
  constructor(props) {
    super(props);

    this.props.actions.loadRequest();
  }

  render(){
    return(
      <div id="content">
        <div className="row">
          {this.props.requests.map(x => {
            return (
              <RequestItem item={x} />
            )
          })}
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
