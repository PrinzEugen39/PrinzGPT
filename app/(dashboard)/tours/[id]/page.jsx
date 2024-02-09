import TourInfo from "@/components/TourInfo";
import { generateTourImage, getToursById } from "@/utils/action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {
  const tour = await getToursById(params.id);

  if (!tour) {
    redirect("/tours");
  }

  const { data } = await axios.get(`${url}${tour?.city}`);
  const tourImage = data?.results[0]?.urls?.raw;

  // const tourImage = await generateTourImage({
  //   city: tour.city,
  //   province: tour.province,
  // });

  return (
    <div className="py-12">
      <Link href="/tours" className="mb-10 btn btn-secondary">
        Back
      </Link>
      {tourImage ? (
        <Image
          src={tourImage}
          width={300}
          height={300}
          className="object-cover mb-12 shadow-xl rounded-xl h-96 w-96"
          alt={tour.title}
        />
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
};

export default SingleTourPage;
