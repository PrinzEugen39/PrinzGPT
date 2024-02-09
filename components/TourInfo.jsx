function TourInfo({ tour }) {
  const { title, description, stops } = tour;

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-3xl font-semibold">{title}</h1>
      <p className="mb-6 leading-loose">{description}</p>
      <ul>
        {stops?.map((stop, index) => (
          <li key={index} className="p-4 mb-6 bg-base-100 rounded-xl">
            <p>{stop}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TourInfo;
