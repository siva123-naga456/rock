import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and(max-width:576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 4px;
  border-style: none;
  outline: none;
  cursor: pointer;
  @media screen and(max-width:576px) {
    width: 100px;
    height: 110px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and(max-width:576px) {
    width: 30%;
  }
`

export const ResultName = styled.p`
  font-size: 20px;
  color: white;
  @media screen and(max-width:576px) {
    font-size: 14px;
  }
`

export const ResultText = styled.p`
  font-size: 25px;
  color: white;
  @media screen and(max-width:576px) {
    font-size: 16px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and(max-width:576px) {
    height: 100px;
    width: 110;
  }
`
