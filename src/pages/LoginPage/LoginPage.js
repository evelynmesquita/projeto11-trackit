import styled from 'styled-components'
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
import AppContext from "../../context/AppContext"

export default function LoginPage() {

    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)


    function loginApp(e) {
        e.preventDefault()
        setDisabled(true)

        const infoLogin = {
            email,
            password
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", infoLogin)
            .then((resp) => {
                setUser({
                    image: resp.data.image,
                    token: resp.data.token
                })
                setDisabled(false)
                navigate("/hoje")
            })

            .catch((err) => {
                alert(err.response.data.message)
                window.location.reload()
                console.log("vixe")
            })
    }

    return (
        <>
            <Logo>
                <img src="../assets/img/logo.png" />
            </Logo>

            <LoginInput>
                <form onSubmit={loginApp} disabled={disabled} >
                    <input 
                        data-test="email-input" 
                        disabled={disabled} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="email" 
                        required />

                    <input 
                        data-test="password-input" 
                        disabled={disabled} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="senha" 
                        required />

                    <button data-test="login-btn" disabled={disabled} type="submit">{!disabled ? 'Entrar' :
                        <ThreeDots
                            width="60"
                            height="60"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            visible={true}
                            wrapperClassName=""
                        />}</button>
                </form>
            </LoginInput>

            <SignUpLoginPage>
                <Link data-test="signup-link" to="/cadastro">
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
    color: #666666;
    padding-left: 11px;
    margin-top: 5px;
    }

    input::placeholder {
        color: #DBDBDB;
    }

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
    margin-top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

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