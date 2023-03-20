import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useContext } from "react";
import AppContext from "../context/AppContext"
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Menu() {

    const { concluded } = useContext(AppContext)

    return (
        <Footer data-test="menu">
            <Link data-test="habit-link" to={"/habitos"}>
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje" data-test="today">
                <Progress>
                    <CircularProgressbar
                        value={concluded}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#FFFFFF",
                            pathColor: "#FFFFFF",
                            trailColor: "transparent",
                        })}
                    />
                </Progress>
            </Link>
            <Link data-test="history-link" to="/historico">
                <p>Histórico</p>
            </Link>
        </Footer>
    )
}

const Footer = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
        a {
            text-decoration: none;
        }

    p {
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    padding-left: 36px;
    padding-right: 36px;
    cursor: pointer;

    }
`

const Progress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
    background: #52B6FF;
    border-radius: 50%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    
`