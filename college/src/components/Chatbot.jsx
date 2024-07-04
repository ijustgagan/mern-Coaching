import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ChatBot = () => {
  const handleNewUserMessage = (newMessage) => {
    addResponseMessage('Response from chatbot: This feature is under development.');
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Chat with Us"
      subtitle="We're here to help!"
    />
  );
};

export default ChatBot;
