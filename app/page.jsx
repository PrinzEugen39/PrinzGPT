import Link from "next/link";

const desc =
  "Unleash the power of conversational AI with PrinzGPT! Engage in dynamic and natural conversations, ask questions, and explore the capabilities of state-of-the-art language models. Our platform is designed to provide a seamless and interactive chat experience";

const Homepage = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-primary">PrinzGPT</h1>
          <p className="py-6 text-lg font-bold leading-loose text-secondary">
            {desc}
          </p>
          <Link href={"/chat"} className="btn btn-neutral">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
