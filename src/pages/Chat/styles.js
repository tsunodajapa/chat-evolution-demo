import styled, { css } from 'styled-components';

export const Container = styled.div`
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    padding: 32px;

    form {
        margin-top: 32px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            width: 100%;
            padding: 15px;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            margin-right: 20px;
        }
        
        button {
            background: var(--color-primary);
            min-width: 56px;
            height: 56px;

            border-radius: 50%;
            border: none;

            display: flex;
            align-items: center;
            justify-content: center ;
        }
    }
`;

export const Messages = styled.div`
    background-image: url('/message-background.jpg') ;
    min-width: 450px;
    height: 300px;
    overflow-y: auto;

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 14px;
    display: flex;
    flex-direction: column;
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;

    ${({ isOwner }) => isOwner && css`align-items: flex-end;`}

    & + div {
        margin-top: 20px;
    }

    span:nth-of-type(2) {
        max-width: 50%;
        ${({ isOwner }) => isOwner ?
        css`background: var(--color-secondary);`
        : css`background: var(--color-tertiary);`}
        
        border-radius: 8px;
        padding: 14px;
    }
`;