import React, {useState} from "react";
import {Container, Button, Row} from "react-bootstrap"
import ChatAi from "../../components/chatAi"
import ImageAi from "../../components/ImageAi"
import styles from "../homePage/homePage.module.css"


export default function HomePage() {
    const [isChatMode, setIsChatMode] = useState(true)
    const handleClick = () => { 
        setIsChatMode(!isChatMode)}
        return (
            <Container className="my-3">
                <Row className="d-flex justify-content-center">
                <h1 className="text-center my-3">Just Imagine</h1>
                <Button 
                className="w-50"
                onClick={handleClick}>
                    {
                        isChatMode ? "Go to ImageAI" : "Go to ChatAI"
                    }
                </Button>
                <Container>
                    {
                        isChatMode ? <ChatAi /> : <ImageAi />
                    }
                </Container>
                </Row>
                
            </Container>
            
        )
        }