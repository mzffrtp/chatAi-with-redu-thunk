import React from "react"
import { Container, Form, InputGroup, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../chatAi/chatAi.module.css";
import { clearScreen, getImage, getDataStart } from "../../redux/actions/chatActions";
import { useState } from "react";

export default function ImageAi () {
    const dispatch = useDispatch();
    const { chatState } = useSelector(state => state);
    const [promt, setPromt] = useState("");

    const handleSubmit = () => {
        dispatch(getDataStart());
        dispatch(getImage(promt));
        setPromt("")

    }
    const handleChange = (e) => {
        setPromt(e.target.value);
    }

    const handleClear = () => {
        dispatch(clearScreen());
    }

console.log(chatState);
    return(
        <Container className=" my-3 justify-content-center border border-warning shadow p-3 mb-5 rounded">
            <Container className={styles.list}>
                {
                    chatState.imageData.map((image) => (
                        <>
                            <p
                            className={styles.promt}
                            >{image.promt}</p>
                            <img 
                            className={styles.imageAnswer}
                            alt="" src={image.answer[0].url}/>
                        </>
                    ))
                }
                {
                    chatState.isLoading && 
                    <p className="m-1">answer is loading ...</p>
                    
                }
            </Container>
            <Container className={styles.form}>
                <InputGroup className="w-100">
                    <Form.Control
                    value={promt}
                        onChange={handleChange}
                        placeholder="Type your question!"></Form.Control>
                    <Button 
                    variant="outline-success"
                        type="submit"
                        onClick={handleSubmit}>ASK</Button>
                    <Button variant="outline-danger"
                        onClick={handleClear}>CLEAR</Button>
                </InputGroup>
            </Container>
        </Container>
    )
}