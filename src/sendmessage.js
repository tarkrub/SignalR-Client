import { useState } from "react"
import { Button, InputGroup,Form } from "react-bootstrap";

const SendMessage = ({sendMessage}) =>
    {
        const [msg,setMessages] = useState('');

        return <Form onSubmit ={ e=>{
                e.preventDefault();
                sendMessage(msg);
                setMessages('');
        }}>
            <InputGroup className="mb-3">
                <Form.Control  onChange={e => setMessages(e.target.value)} value={msg} 
                placeholder="Message Here"
                ></Form.Control>
                <Button variant="primary" type="submit" disabled={!msg}>Send</Button>
            </InputGroup>


        </Form>
    }

export default SendMessage;