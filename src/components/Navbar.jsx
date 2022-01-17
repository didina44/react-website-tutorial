import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import { Badge } from '@material-ui/core';
import  { AddShoppingCartIcon } from '@material-ui/core'

//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




const Container=styled.div`
height:60px; 
background-color:white;
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center`

const Language=styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`

const Input=styled.input`
border:none;`

const Center=styled.div`
flex:1;
text-align:center`

const Logo=styled.h1 `
font-weight:bold;
`

const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
display:flex;
align-items:center;
margin-left:25px;
`

const Navbar=()=>{
return (
  <Container> 
  <Wrapper>  

<Left> 
<Language> EN </Language>
<SearchContainer> 
<Input />
<FaSearch style={{color:"grey", fontSize:16 }} /> 
</SearchContainer>

  </Left>


  <Center> 
  <Logo> GravoSign </Logo>
  
   </Center>
  <Right> 

  <MenuItem>INREGISTRATI-VA</MenuItem>
  <MenuItem>LOGATI-VA</MenuItem>

    <MenuItem>
    <Badge badgeContent={4} color="primary">
<FaShoppingCart style={{fontSize:24}} />  
    </Badge>
    </MenuItem>


  
   </Right>
  
  </Wrapper>
  </Container>
)}

export default Navbar