import React from "react"
import { Container, Form, InputGroup, Button, Row } from "react-bootstrap";

export default function ChatAi() {
    return (
        <Container className="w-75 my-3 justify-content-center border border-primary">
            <Row >
            <Container className="list"></Container>
            <InputGroup>
                <InputGroup.Text>?</InputGroup.Text>
                <Form.Control
                    placeholder="Ask a question"></Form.Control>
                <Button>ASK</Button>
            </InputGroup>
            </Row>
            
        </Container>
    )
}