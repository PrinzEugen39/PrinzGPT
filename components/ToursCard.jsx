import Link from "next/link";
import React from "react";

const ToursCard = ({ tour }) => {
  const { city, id, province } = tour;
  return (
    <Link
      href={`/tours/${id}`}
      className="card card-compact rounded-xl bg-base-100"
    >
      <div className="items-center justify-center card-body">
        <h2 className="text-center card-title">
          {city}, {province}
        </h2>
      </div>
    </Link>
  );
};

export default ToursCard;
