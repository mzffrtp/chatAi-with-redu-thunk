import React, {useState} from "react";
import {Container, Button} from "react-bootstrap"
import ChatAi from "../../components/chatAi"
import ImageAi from "../../components/ImageAi"


export default function HomePage() {
    const [isChatMode, setIsChatMode] = useState(true)
    const handleClick = () => { 
        setIsChatMode(!isChatMode)}
        return (
            <Container className="my-5">
                <h1>Just Imagine</h1>
                <Button onClick={handleClick}>
                    {
                        isChatMode ? "Go to ImageAI" : "Go to ChatAI"
                    }
                </Button>
                <Container>
                    {
                        isChatMode ? <ChatAi /> : <ImageAi />
                    }
                </Container>
            </Container>
            
        )
        }