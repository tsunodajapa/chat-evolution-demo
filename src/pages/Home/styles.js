import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

    padding: 59px;

    img {
        width: 80%;
    }
 
    h1 {
        font-size: 28px;

        span {
            color: var(--color-primary);
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        margin-top: 46px;

        input {
            width: 100%;
            padding: 15px;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            margin-bottom: 28px;
        }
        
        button {
            background: var(--color-primary);
            padding: 15px;
            border-radius: 50px;
            border: none;
        }
    }
`;