import { GrClose } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";
import "./Chatbot.scss";
import { useState } from "react";
const Chatbot = () => {
  const [showChat, setShowChat] = useState(true);

  return (
    <>
    {showChat ? (

      <div className="chatbot-interface">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/TIsXvOZOYzaBYOjXeSwJx"
          title="Tulos Support"
          id="chatbot-frame"
          ></iframe>
        <button id="close-chat" onClick={() => setShowChat(false)}>
          <GrClose />
        </button>
      </div>
          ) : <div id="support-icon" onClick={() => setShowChat(true)}><MdContactSupport/></div>}
    </>
  );
};

export default Chatbot;
