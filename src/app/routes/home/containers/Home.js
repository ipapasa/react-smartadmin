/**
 * Created by griga on 11/30/15.
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

import WidgetGrid from '../../../components/widgets/WidgetGrid'
import JarvisWidget  from '../../../components/widgets/JarvisWidget'


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {
    if (this.props.user.userName == '') {
      this.context.router.push('/login');
    }
  }

  render() {
    return (
      <div id="content">
        <WidgetGrid>
          <div className="row">
            <article className="col-sm-6">
            </article>
          </div>
        </WidgetGrid>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  console.log('home mapStateToProps',state.account);
  return {
    user: state.account
  }
}

export default connect(mapStateToProps)(Home);
