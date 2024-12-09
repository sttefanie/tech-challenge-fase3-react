import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/loginForm/loginForm';

// Styled Components
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #6a1b9a; /* Fundo roxo */
`;

const LoginWrapper = styled.div`
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #6a1b9a;
    margin-bottom: 20px;
`;

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        console.log('Logando com', email, password);

        // Simula lógica de autenticação
        if (email === 'professor@exemplo.com' && password === '1234') {
            navigate('/home-prof'); // Redireciona para a página do professor
        } else if (email === 'aluno@exemplo.com' && password === '1234') {
            navigate('/home-aluno'); // Redireciona para a página do aluno
        } else {
            alert('Credenciais inválidas!');
        }
    };

    return (
        <LoginContainer>
            <LoginWrapper>
                <Title>Login</Title>
                <LoginForm onLogin={handleLogin} />
            </LoginWrapper>
        </LoginContainer>
    );
};

export default Login;
