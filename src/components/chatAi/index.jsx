import React from "react"
import { Container, Form, InputGroup, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../chatAi/chatAi.module.css";
import { ActionTypes } from "../../redux/constants/actionTypes";
import { getDataStart } from "../../redux/actions/chatActions";


export default function ChatAi() {
    const dispatch = useDispatch();
    const {chatState} = useSelector(state=>state)

    const handleSubmit = () => {
        dispatch(getDataStart());
    }
    return (
        <Container className=" my-3 justify-content-center border border-warning shadow p-3 mb-5 rounded">
            <Container className={styles.list}>list</Container>
            <Container className={styles.form}>
                <InputGroup className="w-100">
                    <Form.Control
                        placeholder="Type your question!"></Form.Control>
                    <Button
                    type="submit"
                    onClick={handleSubmit}>ASK</Button>
                </InputGroup>
            </Container>

        </Container>
    )
}