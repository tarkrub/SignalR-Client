// import { Row, Col } from "react-bootstrap";
// import MessageContainer from "./messagecontainer";
// import SendMessage from "./sendmessage";

// const ChatRoom = ({ messages,sendMessage }) => 
//     {
//         console.log("chatroom"+messages);
//     return (
//     <div style={{ display: 'flex',width:"500px", flexDirection: 'column', height: '100vh',overflowY: 'auto' }}>
//     <Row className="px-5 py-5">
//       <Col>
//         <h2>ChatRoom</h2>
//       </Col>
//     </Row>
//     <Row>
//       <Col>
//         <MessageContainer messages={messages} />
//       </Col>
//       <Col>
//         <SendMessage sendMessage={sendMessage} />
//       </Col>
//     </Row>
//   </div>
//     )
//   };

// export default ChatRoom;

import { Row, Col } from "react-bootstrap";
import MessageContainer from "./messagecontainer";
import SendMessage from "./sendmessage";

const ChatRoom = ({ messages, sendMessage }) => {
    console.log("chatroom" + messages);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width:"500px",height: '100vh', overflowY: 'hidden' }}>
            <Row className="px-5 py-5" style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
                <Col>
                    <h2>ChatRoom</h2>
                </Col>
                <Col></Col>
            </Row>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <MessageContainer messages={messages} />
            </div>
            <Row className="px-5 py-5" style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}>
                <Col>
                    <SendMessage sendMessage={sendMessage} />
                </Col>
            </Row>
        </div>
    );
};

export default ChatRoom;

