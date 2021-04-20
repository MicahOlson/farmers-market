import React from 'react'
import PropTypes from 'prop-types'

function SeasonalProduceMonth(props) {
  return (
    <>
      <p>Month: {props.month}</p>
      <p>Selection: {props.selection.join(", ")}</p>
      <hr/>
    </>
  );
}

SeasonalProduceMonth.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
}

export default SeasonalProduceMonth;