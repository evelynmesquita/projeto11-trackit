import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function SignUpPage() {
    return (
        <>
            <Logo>
                <img src='../assets/logo.png' />
            </Logo>

            <RegisterInput>
                <form>
                    <input placeholder="email" type="email"/>
                    <input placeholder="senha" type="password"/>
                    <input placeholder="nome" type="text"/>
                    <input placeholder="foto" type="url"/>
                </form>
                
            </RegisterInput>

            <RegisterButton>
                <Link to="/">
                    <button>Cadastrar</button>
                </Link>
            </RegisterButton>

            <SingIn>
                <Link to="/">
                    <span>Já tem uma conta? Faça login!</span>
                </Link>
            </SingIn>
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
const RegisterInput = styled.div`
    form {
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

const RegisterButton = styled.div`
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

const SingIn = styled.div`
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