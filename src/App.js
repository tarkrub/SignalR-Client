import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import WaitingRoom from './waitingroom';
import { Button } from 'react-bootstrap';
import backgroundImage from './assets/firefly.jpg';
import ChatRoom from './chatroom';

function App() {
  const [conn,setConnection] =useState();
  const [messages,setMessages] = useState([]);
  const joinChat = async (username,chatroom)=>{
    try{
      const conn= new signalR.HubConnectionBuilder()
                  .withUrl("http://localhost:5126/chat")
                  .configureLogging(signalR.LogLevel.Information)
                  .build();

      conn.on("JoinPrivateChat",(username,msg)=>{
        setMessages(messages=>[...messages,{username,msg}]);
      })  

      conn.on("ReceiveMessage",(username,msg) =>{
        setMessages(messages=>[...messages,{username,msg}]);

      })

      await conn.start();
      await conn.invoke("JoinPrivateChat",{username,chatroom});

      setConnection(conn);
      
    }
    catch(e)
    {
      console.log(e);
    }
  }

  const sendMessage = async(message) =>
    {
      try{
        await conn.invoke("SendMessage",message);
      }catch(e)
      {
        console.log(e);
      }
    }

    


  return (
      <div style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
      }}>

          <div style={{
              backgroundColor: "white",
              height: "400px",
              width: "600px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
          }}>
              
              { !conn
                ? <WaitingRoom joinChat={joinChat} />
                : <ChatRoom  messages={messages} sendMessage={sendMessage}/>
              }

          
          </div>
      </div>
  
  );
}

export default App;

