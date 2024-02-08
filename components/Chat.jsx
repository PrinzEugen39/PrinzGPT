"use client";

import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong, try again later");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = { role: "user", content: text };

    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  return (
    <div className="flex flex-col justify-between max-h-screen min-h-screen px-10 pt-8">
      <div className="flex flex-col items-center px-4 overflow-x-hidden overflow-y-auto md:px-10">
        <span className="text-2xl font-semibold text-secondary">Messages</span>
        {messages.map((message, index) => {
          const avatar = message.role === "assistant" ? "🤖" : "👨";
          const bg =
            message.role === "assistant" ? "bg-base-100" : "bg-base-200";

          return (
            <div
              key={index}
              className={`${bg} flex gap-6 py-6 mx-8 px-4 text-lg leading-loose border-b border-base-300 w-full`}
            >
              <span className="w-8">{avatar}</span>
              <p className="max-w-5xl">{message.content}</p>
            </div>
          );
        })}
        {isPending ? (
          <span className="pt-32 loading loading-lg loading-infinity"></span>
        ) : null}
      </div>
      <div className="min-w-max">
        <form onSubmit={handleSubmit} className="max-w-4xl py-8 mx-auto">
          <div className="w-full join">
            <input
              type="text"
              name=""
              id=""
              placeholder="Tanya disini..."
              className="w-full input input-bordered join-item"
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="join-item btn btn-primary"
              type="submit"
              disabled={isPending}
            >
              {isPending ? <span className="loading loading-ball" /> : "Kirim"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
