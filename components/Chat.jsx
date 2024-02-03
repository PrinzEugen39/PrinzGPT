"use client";

import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const ChatComponent = () => {
  const [text, setText] = useState("");
  const [messages, setmessages] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (message) => generateChatResponse(message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-2xl">Messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
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
          <button className="join-item btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
