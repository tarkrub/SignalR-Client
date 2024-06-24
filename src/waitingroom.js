import { useState } from "react";
import {Button,Form,Col,Row} from "react-bootstrap";

const WaitingRoom = ({joinChat})=>
    {
        const [username,SetUsername] = useState();
        const [chatroom,SetChatroom] = useState();

        return (
            <div>
                <h1>Welcome to Chatroom</h1>
                <Form onSubmit={ e=>{
                        e.preventDefault();
                        joinChat(username,chatroom);
                    }}>
                            <Row style={{display:"flex", 
                                flexDirection:"column",
                                justifyContent:"center",
                                alignItems:"center"}}>
                            <Col>
                            <Form.Group >
                                <Form.Control style={{ height: '35px', fontSize: '15px',width:'350px',
                                marginBottom:"10px",borderRadius: "10px" }} placeholder="Username" 
                                onChange={e=>SetUsername(e.target.value)} />
                                <br />
                                <Form.Control style={{ height: '35px', fontSize: '15px',
                                borderRadius: "10px",width:'350px' }} placeholder="Chatroom" 
                                onChange={e=>SetChatroom(e.target.value)} />
                            </Form.Group>
                            </Col>
                            <Col >
                            <Button variant="success" type="submit" style={{display:"flex", 
                                alignItems:"center", marginTop:"25px",fontSize: '15px',backgroundColor:"#0F1EDA",
                               color:"white",borderRadius: "10px", 
                               padding: "10px",}}>
                                    Join</Button>
                            </Col>
                        </Row>
                    </Form>
            </div>
                
            
        
                )


    }

export default WaitingRoom;