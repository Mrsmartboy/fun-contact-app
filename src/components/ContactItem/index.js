import {TableCellContainer,NameCell,MobileCell,SeparatorLine,MobileContainer,Star,StarButton} from './styled'

const ContactItem =(props)=>{
    const {eachContact,onToggle}=props
    const {name,mobileNo,id,isFavorite}=eachContact
 
    const onToggleButton=()=>{
        onToggle(id)
    }

    const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    return(
        <TableCellContainer>
            <NameCell>{name}</NameCell>
            <SeparatorLine/>
            <MobileContainer>
            <MobileCell>{mobileNo}</MobileCell>
            <StarButton onClick={onToggleButton}>
            <Star src={starImgUrl} alt="star"/>
            </StarButton>
            </MobileContainer>

        </TableCellContainer>
    )

}

export default ContactItem