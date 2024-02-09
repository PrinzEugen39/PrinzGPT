"use client";
import Link from "next/link";
import { useState } from "react";

const desc =
  "Unleash the power of conversational AI with PrinzGPT! Engage in dynamic and natural conversations, ask questions, and explore the capabilities of state-of-the-art language models. Our platform is designed to provide a seamless and interactive chat experience";

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-primary">PrinzGPT</h1>
          <p className="py-6 text-lg font-bold leading-loose text-secondary">
            {desc}
          </p>
          <Link
            href={"/chat"}
            className="flex justify-center mx-auto max-w-44 btn btn-neutral"
            onClick={handleStart}
          >
            Get Started
            {loading && <span className="loading loading-spinner"></span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
