import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invalid Values Please Adjust Them!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });
  
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Found!</p>
  }
  return <div>Filtered Events</div>;
};

export default FilteredEvents;
