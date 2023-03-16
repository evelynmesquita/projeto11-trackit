import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"

export default function SignUpPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [disabled, setDisabled] = useState(false)

    function registerUser(e) {
        e.preventDefault()
        setDisabled(true)

        const infoRegister = {
            email,
            name,
            image,
            password
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", infoRegister)
            .then((res) => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
                setDisabled(false)
                console.log(res.data)

            })
            .catch((err) => {
                alert(err.response.data.message)
                window.location.reload()
            })

    }

    return (
        <>
            <Logo>
                <img src='../assets/logo.png' />
            </Logo>

            <RegisterInput>
                <form onSubmit={registerUser}>
                    <input 
                        data-test="email-input" 
                        disabled={disabled} 
                        type="email" onChange={(e) => setEmail(e.target.value)} 
                        placeholder="email" 
                        required/>

                    <input 
                        data-test="password-input" 
                        disabled={disabled} 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="senha"
                        required/>

                    <input 
                        data-test="user-name-input" 
                        disabled={disabled} 
                        type="name" 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="nome"
                        required/>

                    <input 
                        data-test="user-image-input" 
                        disabled={disabled} 
                        type="url" 
                        onChange={(e) => setImage(e.target.value)} 
                        placeholder="foto"
                        required/>

                    <button 
                        data-test="signup-btn" 
                        disabled={disabled} 
                        type="submit">
                            {!disabled ? 'Cadastrar' :
                            <ThreeDots
                                width="60"
                                height="60"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />}</button>
                </form>
                
            </RegisterInput>

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