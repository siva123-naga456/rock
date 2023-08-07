import styled from 'styled-components'

export const GameScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 80%;
  background-color: transparent;
  margin-top: 2px;
`

export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameScoreBoardContainer = styled(GameScoreNameContainer)`
  background-color:#ffffff;
  height:100%;
  width:15%;
  border-radius:10px
  justify-content: center;
  align-items:center;
  @media screen and(max-width:576px) {

    width: 25%;
  }
`

export const GameScoreName = styled.h1`
  font-size: 20px;
  color: white;
  font-family: 'Bree-Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and(max-width:576px) {
    font-size: 14px;
  }
`

export const GameScoreBoardHeading = styled.p`
  font-size: 20px;
  color: #223a5f;
  margin-bottom: 0px;
  @media screen and(max-width:576px) {
    font-size: 14px;
  }
`
export const GameScoreBoardScore = styled.p`
  font-size: 42px;
  color: #223a5f;
  margin-bottom: 0px;
  font-family: 'Roboto';
  @media screen and(max-width:576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
