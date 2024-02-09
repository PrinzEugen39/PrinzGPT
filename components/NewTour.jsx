"use client";

import {
  createNewTours,
  fetchUserTokenById,
  generateTourResponse,
  getExistingTours,
  updateTokens,
} from "@/utils/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import TourInfo from "./TourInfo";
import { useAuth } from "@clerk/nextjs";

function NewTour() {
  const queryClient = useQueryClient();

  const { userId } = useAuth();

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTours(destination);

      if (existingTour) {
        return existingTour;
      }

      const currentTokens = await fetchUserTokenById(userId);

      if (currentTokens < 100) {
        toast.error("Not enough tokens");
        return;
      }

      const newTour = await generateTourResponse(destination);

      if (!newTour) {
        toast.error("No matching province or city, try again later");
        return null;
      }

      const res = await createNewTours(newTour.tour);
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      const newTokens = await updateTokens(userId, newTour.tokens);
      toast.success(
        `Tour created successfully, tokens remaining: ${newTokens}`
      );
      return res;
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-lg loading-spinner"></span>
      </div>
    );
  }

  return (
    <div className="py-10">
      <form onSubmit={handleSubmit} className="max-w-3xl">
        <h2 className="mb-4">Pilih daerah yang ingin dituju</h2>
        <div className="w-full join">
          <input
            type="text"
            className="w-full join-item input input-bordered"
            placeholder="Kota"
            name="kota"
          />
          <input
            type="text"
            className="w-full join-item input input-bordered"
            placeholder="Provinsi"
            name="provinsi"
          />
          <button type="submit" className="join-item btn btn-primary">
            Tampilkan hasil
          </button>
        </div>
      </form>
      <div className="mt-16">{tour && <TourInfo tour={tour} />}</div>
    </div>
  );
}

export default NewTour;
