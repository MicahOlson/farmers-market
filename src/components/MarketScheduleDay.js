import React from 'react'
import PropTypes from 'prop-types'

function MarketScheduleDay(props) {
  return (
    <>
      <hr/>
      <p>Day: {props.day}</p>
      <p>Location: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </>
  );
}

MarketScheduleDay.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default MarketScheduleDay;