import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <Logo>
                <img src='../assets/logo.png' />
            </Logo>

            <LoginInput>
                <form>
                    <input placeholder="email" type="email" required/>
                    <input placeholder="senha" type="password" required/>
                </form>
            </LoginInput>

            <LoginButton>
                <Link to="/habitos">
                    <button>Entrar</button>
                </Link>
            </LoginButton>

            <SignUpLoginPage>
                <Link to="/cadastro">
                    <span>Não tem uma conta? Cadastre-se!</span>
                </Link>
            </SignUpLoginPage>
        </>
    )
}

const Logo = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 70px;
    margin-bottom: 30px;
`

const LoginInput = styled.div`
    form{
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    align-items: center;  
    }

    input {
    width: 290px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-style: normal;
    font-size: 19.976px;
    line-height: 25px; 
    color: #DBDBDB;
    padding-left: 11px;
    margin-top: 5px;
    }

    input::placeholder {
        color: #DBDBDB;
    }
`

const LoginButton = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-top: 6px;

    button {
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;

    }
    
`

const SignUpLoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    
    a {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    }

`