import React from 'react'
import MarketScheduleDay from "./MarketScheduleDay"

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

let filteredSchedule = [];
marketSchedule.forEach(function(event) {
  if (event.day === "Thursday") {
    filteredSchedule.push(event);
  }
})

function MarketScheduleDetails() {
  return (
    <>
      {filteredSchedule.map((event, index) =>
        <MarketScheduleDay
          day={event.day}
          location={event.location}
          hours={event.hours}
          booth={event.booth}
          key={index}
        />
      )}
    </>
  );
}

export default MarketScheduleDetails;