"use client";

import { getAllTours } from "@/utils/action";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import { useState } from "react";

const ToursPage = () => {
  const [search, setSearch] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["tours", search],
    queryFn: async () => {
      const response = await getAllTours(search);
      return response;
    },
  });

  return (
    <>
      <form className="max-w-lg py-12">
        <div className="w-full join">
          <input
            type="text"
            placeholder="Search"
            className="w-full join-item input input-bordered"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearch("")}
          >
            {isPending ? "Please wait..." : "Clear"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className="loading loading-lg"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};

export default ToursPage;
