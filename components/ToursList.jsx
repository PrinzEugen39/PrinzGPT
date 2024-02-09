import React from "react";
import ToursCard from "./ToursCard";

const ToursList = ({ data }) => {
  if (data.length === 0) {
    return <p className="text-lg text-center">No tours found</p>;
  }

  return (
    <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((tour) => (
        <ToursCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default ToursList;
