import styled from 'styled-components'

export const AppContainer = styled.div`
min-height: 100vh;
padding: 55px;
`

export const Contacts= styled.h1`
  color: #000000;
  font-size: 30px;
  font-weight: bold;

`

export const ContactInputContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const FormInput = styled.form`
   display: flex;
   flex-direction: row;
   
`

export const NameInput= styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  margin-right: 20px;
  width: 20%;

`

export const NumberInput = styled.input`
  border:1px solid #d7dfe9;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  margin-right: 20px;
  width: 20%;
`

export const SubmitButton = styled.button`
    background-color: #0ea5e9;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 10px;
    cursor: pointer;
`

export const DataTableContainer = styled.ul`
   padding-left: 0px;
   margin-top: 48px;
`
export const DataItem = styled.li`
  border: 1px solid #cbd5e1;
  list-style-type: none;
  background-color: #f1f5f9;
  display: flex;
`
export const Name = styled.p`
  margin-left: 32px;
  color: #334155;
  font-size: 20px;
  font-weight: 500;
  width: 33%;
  `

  export const Separator = styled.hr`
    margin: 0;
  border: 1px solid #cbd5e1;
  `

  export const Number = styled.p`
     margin-left: 32px;
  color: #334155;
  font-size: 20px;
  font-weight: 500;

  `

  export const ContactItemContainer= styled.ul`
    padding-left: 0px;
   padding-top: 0px;

  `