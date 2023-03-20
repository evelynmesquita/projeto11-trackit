import dayjs from "dayjs";
import axios from "axios";
import styled from 'styled-components'
import Menu from '../../components/Menu';
import Header from "../../components/Header"
import { useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext"
import { useContext, useEffect, useState } from "react";

export default function TodayPage() {
    const { user, todayHabits, setTodayHabits, setConcluded } = useContext(AppContext)
    const weekday = (new Date().toLocaleString('pt-br', { weekday: 'long' }))
    const weekdayAbrev = weekday.split("-")[0]
    const [reload, setReload] = useState([])
    const day = (dayjs().format("DD/M"))
    const location = useLocation()

    useEffect(() => {

        const settings = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", settings)
            .then(res => {
                const data = res.data
                setTodayHabits(data)
            })

            .catch((err) => {
                console.log(err.response.data)
            })

    }, [reload])

    function render() {
        if (todayHabits.find((h) => h.done === true)) {
            let count = 0
            todayHabits.forEach((h) => {
                if (h.done === true) {
                    count = count + 1
                }

            })
            setConcluded(((count / todayHabits.length) * 100).toFixed(1))
            return `${((count / todayHabits.length) * 100).toFixed(1)}% dos hábitos concluídos`

        } else {
            setConcluded(0)
            return 'Nenhum hábito concluído ainda'
        }
    }

    function finishHabit(habit) {

        const settings = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }


        if (habit.done === true) {

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, settings)
                .then(() => {
                    setReload([])
                })
            return
        } else {



            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, settings)
                .then(() => {
                    setReload([])
                })
                .catch(err => console.log(err.response.data))
        }
    }


    return (
        <>
            <Header data-test="header" />

            <HabitsPageStyle >
                <Day concluded={(todayHabits.find((h) => h.done === true))}>
                    <h1 data-test="today">
                        {`${weekdayAbrev.charAt(0).toUpperCase() + weekdayAbrev.slice(1)}, ${day}`}
                    </h1>
                    <p data-test="today-counter">
                        {location.pathname === "/hoje" && render()}
                    </p>
                </Day>

                {todayHabits.map((h, i) =>
                    <RegisteredHabits data-test="today-habit-container" key={h.id} done={h.done} sequence={h.highestSequence === h.currentSequence && h.highestSequence > 0} >
                        <div>
                            <h1 data-test="today-habit-name">{h.name}</h1>
                            <h3 data-test="today-habit-sequence">
                                Sequência atual: <p> {h.currentSequence} {h.currentSequence > 1 ? 'dias' : h.currentSequence === 0 ? '' : 'dia'}</p>
                            </h3>
                            <h3 data-test="today-habit-record">
                                Record: <span> {h.highestSequence} {h.highestSequence > 1 ? 'dias' : h.highestSequence === 0 ? '' : 'dia'}</span>
                            </h3>
                        </div>
                        <DoneButton data-test="today-habit-check-btn" onClick={() => finishHabit(h, i)} done={h.done}></DoneButton>
                    </RegisteredHabits>
                )}
            </HabitsPageStyle>

            <Menu data-test="menu" />
        </>
    )
}


const Day = styled.div`
    h1 {
        font-size: 23px;
        margin-bottom: 5px;
        margin-top: 28px;
        width: 340px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;
      
    }
    p {
        font-size: 18px;        
        margin-bottom: 8px;
        font-weight: 400;
        font-family: 'Lexend Deca';
        color: ${props => props.concluded ? "#8FC549" : '#BABABA'};
    }
`

const HabitsPageStyle = styled.div`
    padding-top: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #F2F2F2;  
    overflow-y: auto;
    padding-bottom: 130px;
    min-height: calc(100vh - 70px);
  
`

const RegisteredHabits = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 19px;    
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 340px;
    border-radius: 5px;
    position: relative;
        h1 {
           font-size:20px ;
           color: #666666;
           margin-bottom: 8px;
           margin-top: 10px;
           font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
        }    

        h3 {
          font-size  :13px ;
          color: #666666;  
          font-family: 'Lexend Deca';
            font-weight: 400;
            line-height: 16px;        
        }   

        p {
            color: ${props => props.done ? '#8FC549' : "#666666"};
            display: inline;
        }    

        span:last-of-type {
            color: ${props => props.sequence ? '#8FC549' : "#666666"};
        }
    
`


const DoneButton = styled.button`
    width: 69px;
    height: 69px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-image: url("../assets/img/check.png");     
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    cursor: pointer;
`
