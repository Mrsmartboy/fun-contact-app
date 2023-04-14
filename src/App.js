import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import ContactItem from './components/ContactItem'
import {AppContainer,Contacts,FormInput,
  NameInput,NumberInput,SubmitButton,DataTableContainer,Name,Number,Separator,DataItem,ContactItemContainer} from './styled'

  const initialContactsList = [
    {
      id: uuid(),
      name: 'Ram',
      mobileNo: 9999988888,
      isFavorite: false,
    },
    {
      id: uuid(),
      name: 'joseph',
      mobileNo: 8688031606,
      isFavorite: false,
    },
    {
      id: uuid(),
      name: 'mounika',
      mobileNo: 9951479584,
      isFavorite: false,
    },
  ]
  

const App =()=>{
  const [contactsList,setContactsList]= useState(initialContactsList)
  const [name,SetName]= useState('')
  const [mobileNo,setMobileNo] = useState('')

  const onChangeName=(event)=>{
       SetName(event.target.value)
  }

  const onChangeMobile = (event)=>{
    setMobileNo(event.target.value)
  }

  const onSubmitForm=(event)=>{
    event.preventDefault()

    if (name.length!==0 && mobileNo.length===10){
      const newContact= {
        id:uuid(),
        name,
        mobileNo,
        isFavorite:false,
      }
  
      setContactsList(prevState=>([...prevState,newContact]))
      setMobileNo('')
      SetName('')

    }else{
      alert("Please Enter the valid details!")
    }

   

  }

  const onToggle=(id)=>{
      setContactsList(prevState=>prevState.map(each=>{
        if (each.id===id){
          return({...each,isFavorite:!each.isFavorite})
        }
        return each
      }))
  }



  return(
    <AppContainer>
      <Contacts>Contacts</Contacts>
     
        <FormInput onSubmit={onSubmitForm}>
        <NameInput placeholder="Name" onChange={onChangeName} value={name} type="text"/>
        <NumberInput placeholder="Mobile Number" onChange={onChangeMobile} value={mobileNo} type="number"/>
        <SubmitButton type='submit'>Add Contact</SubmitButton>
        </FormInput>
        <DataTableContainer>
          <DataItem>
         <Name>Name</Name>    
         <Separator/> 
         <Number>Number</Number> 
         </DataItem>        
         <ContactItemContainer>
          {contactsList.map(eachContact=>(
            <ContactItem eachContact={eachContact} key={eachContact.id} onToggle={onToggle}/>
          ))}
          </ContactItemContainer>                                                 
        </DataTableContainer>
    </AppContainer>
  )
}

export default App