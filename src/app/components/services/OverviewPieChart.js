import React, {PropTypes} from 'react';

import HighchartTable from '../graphs/highchart/HighchartTable';

class OverviewPieChart extends React.Component {

  render(){
    return(
      <div className="col-md-4">
        <HighchartTable style={{minWidth: '310px', height: '600px', maxWidth: '600px', margin: '0 auto'}}></HighchartTable>
      </div>
    )
  }

}

export default OverviewPieChart;
