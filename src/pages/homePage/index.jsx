import React, {useState} from "react";
import {Container, Button, Row} from "react-bootstrap"
import ChatAi from "../../components/chatAi"
import Footer from "../../components/footer";
import ImageAi from "../../components/ImageAi"
import styles from "../homePage/homePage.module.css"

export default function HomePage() {
    const [isChatMode, setIsChatMode] = useState(true)
    const handleClick = () => { 
        setIsChatMode(!isChatMode)}
        return (
            <Container className={styles.chatBot}>
                <Row className="d-flex justify-content-center">
                <h1 
                className={`text-center ${isChatMode ? styles.chatText : styles.imageText}`}>Just Imagine</h1>
                <Button variant = "outline-warning" 
                className="w-50"
                onClick={handleClick}>
                    {
                        isChatMode ? "Try ImageAI" : "Try ChatAI"
                    }
                </Button>
                <Container>
                    {
                        isChatMode ? <ChatAi /> : <ImageAi />
                    }
                </Container>
                </Row>
                <Footer />
            </Container>
            
        )
        }