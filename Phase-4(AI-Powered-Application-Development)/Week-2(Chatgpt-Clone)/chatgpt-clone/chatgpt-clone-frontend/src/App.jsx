import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import MessageList from "./components/MessageList/MessageList";
import ChatInput from "./components/ChatInput/ChatInput";

// Backend API URL
const API_BASE_URL = "http://localhost:3000/api";

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Extract conversations safely from the backend response
const getConversations = (responseData) => {
  const data = responseData?.data;

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.conversations)) {
    return data.conversations;
  }

  if (Array.isArray(responseData?.conversations)) {
    return responseData.conversations;
  }

  console.error("Unexpected conversations API response:", responseData);

  return [];
};

function App() {
  // Store all chat messages
  const [conversations, setConversations] = useState([]);

  // Track loading state
  const [isLoading, setIsLoading] = useState(false);

  // Reference to the bottom of the message list
  const messagesEndRef = useRef(null);

  // Scroll automatically to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Fetch previous conversations when the application loads
  useEffect(() => {
    let cancelled = false;

    const fetchConversations = async () => {
      try {
        const response = await api.get("/chat/conversations");

        if (cancelled) return;

        if (response.data?.success) {
          const conversationData = getConversations(response.data);

          setConversations(conversationData);
        } else {
          console.error(
            "Failed to fetch conversations:",
            response.data?.message,
          );
        }
      } catch (error) {
        if (!cancelled) {
          console.error(
            "Error fetching conversations:",
            error.response?.data?.message || error.message,
          );
        }
      }
    };

    fetchConversations();

    return () => {
      cancelled = true;
    };
  }, []);

  // Automatically scroll when messages or loading state change
  useEffect(() => {
    scrollToBottom();
  }, [conversations, isLoading]);

  // Handle sending a new message
  const handleSendMessage = async (question) => {
    // Validate the user's input
    if (typeof question !== "string" || !question.trim()) {
      return;
    }

    const trimmedQuestion = question.trim();

    // Create a temporary user message
    const tempUserMessage = {
      id: `temp-${Date.now()}`,
      role: "user",
      content: trimmedQuestion,
    };

    // Add the temporary message immediately
    setConversations((prev) => [
      ...(Array.isArray(prev) ? prev : []),
      tempUserMessage,
    ]);

    setIsLoading(true);

    try {
      // Send the question to the backend
      const response = await api.post("/chat/conversations", {
        question: trimmedQuestion,
      });

      // Validate the backend response
      if (!response.data?.success) {
        throw new Error(
          response.data?.message || "Failed to generate a response.",
        );
      }

      // Extract actual messages from the backend
      const { userConversation, assistantConversation } =
        response.data.data || {};

      if (!userConversation || !assistantConversation) {
        throw new Error(
          "The backend response is missing the user or assistant message.",
        );
      }

      // Replace the temporary message with actual database messages
      setConversations((prev) => {
        const currentMessages = Array.isArray(prev) ? prev : [];

        const filteredMessages = currentMessages.filter(
          (message) => message.id !== tempUserMessage.id,
        );

        return [...filteredMessages, userConversation, assistantConversation];
      });
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message,
      );

      // Display the error in the chat
      const errorConversation = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          error.response?.data?.message ||
          error.message ||
          "There was an error generating a response.",
      };

      setConversations((prev) => [
        ...(Array.isArray(prev) ? prev : []),
        errorConversation,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Main chat area */}
      <main className="chat">
        <ChatHeader />

        {/* Conversation messages */}
        <MessageList
          conversations={conversations}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />

        {/* Message input */}
        <ChatInput
          handleSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;
