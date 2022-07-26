import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import { Main } from '../../components/Main';

import Background from '../../assets/img/background-home.svg';

import { Container } from './styles';

const Home = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        navigate(`/chat/${name}`);
    }

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <img
                        src={Background}
                        alt='Duas pessoas encostadas em um celular gigante, que possuí a altura deles, no celular constam mensagens que ambos estão trocando'
                    />
                    <h1>
                        Seja muito bem vindo(a) ao Lex<span>Chat</span>
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <input type='text' onChange={e => setName(e.target.value)} />
                        <button type='submit'>Entrar no bate papo</button>
                    </form>
                </Container>
            </Main>
        </>
    )
}

export default Home;