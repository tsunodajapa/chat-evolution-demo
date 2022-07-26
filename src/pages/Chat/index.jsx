import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { v4 as uuid } from 'uuid';

import Header from '../../components/Header'
import { Main } from '../../components/Main';

import { Container, Message, Messages } from './styles';

import Send from '../../assets/img/send.svg';
import { useEffect, useState } from 'react';

const Chat = () => {
    const { name } = useParams();

    const [socket, setSocket] = useState(null);
    const [messageText, setMessageText] = useState('null');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (socket) {
            console.log('teste')
            socket.on('messages', (newMessage) => {
                setMessages((oldMessages) => [...oldMessages, newMessage]);
            });

            return () => {
                socket.off('connect');
                socket.off('disconnect');
                socket.off('messages');
            }
        }

        const newSocket = io('http://localhost:3333', {
            query: {
                id: uuid()
            }
        });

        setSocket(newSocket);
    }, [socket]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(messageText);

        const newMessage = {
            text: messageText,
            name,
            time: new Date().toLocaleTimeString()
        }

        setMessageText('');
        setMessages((oldMessages) => [...oldMessages, newMessage]);
        socket.emit('messages', newMessage);
    }

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Messages>
                        {
                            messages.map((message, index) =>
                                <Message key={index} isOwner={message.name === name}>
                                    <span>{message.name} - {message.time}</span>
                                    <span>{message.text}</span>
                                </Message>
                            )
                        }
                    </Messages>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            onChange={e => setMessageText(e.target.value)}
                        />
                        <button type='submit'>
                            <img src={Send} alt='ícone de enviar mensagem - avião de papel' />
                        </button>
                    </form>
                </Container>
            </Main>
        </>
    )
}

export default Chat;