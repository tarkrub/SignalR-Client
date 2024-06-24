// import { Row, Col } from "react-bootstrap";
// import MessageContainer from "./messagecontainer";
// import SendMessage from "./sendmessage";

// const ChatRoom = ({ messages, sendMessage }) => {
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', width:"500px",height: '100vh', overflowY: 'hidden' }}>
//             <Row className="px-5 py-5" style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
//                 <Col>
//                     <h2>ChatRoom</h2>
//                 </Col>
//                 <Col></Col>
//             </Row>
//             <div style={{ flex: 1, overflowY: 'auto' }}>    
//                 <MessageContainer messages={messages} />
//             </div>
//             <Row className="px-5 py-5" style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}>
//                 <Col>
//                     <SendMessage sendMessage={sendMessage} />
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default ChatRoom;


import React, { useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MessageContainer from "./messagecontainer";
import SendMessage from "./sendmessage";

const ChatRoom = ({ messages, sendMessage }) => {
  const messageContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "500px", height: "100vh", overflowY: "hidden" }}>
      <Row className="px-5 py-5" style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
        <Col>
          <h2>ChatRoom</h2>
        </Col>
        <Col></Col>
      </Row>
      <div ref={messageContainerRef} style={{ flex: 1, overflowY: "auto" }}>
        <MessageContainer messages={messages} />
      </div>
      <Row className="px-5 py-5" style={{ borderTop: "1px solid #ccc", marginTop: "10px" }}>
        <Col>
          <SendMessage sendMessage={sendMessage} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;


