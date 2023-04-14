import React from "react"
import { Container, Form, InputGroup, Button, Row } from "react-bootstrap";
import styles from "../../assets/chatAi.module.css"

export default function ChatAi() {
    return (
        <Container className="w-75 my-3">
            <Row className="justify-content-center">
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