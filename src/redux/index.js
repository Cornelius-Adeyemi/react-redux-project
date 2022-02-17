import React, { useEffect } from 'react';
import axios from 'axios';
import {secondActionCreator, userActionCreator} from "./store";
import { useDispatch, useSelector } from 'react-redux';
import { makeSelector, secondMakeSelector } from './reselect';
import styled from 'styled-components';
import {useNavigate, useParams } from "react-router-dom";


const Container = styled.div`
margin-top:10px;
display:flex;
justify-content:center;
`;

const UserContainer = styled.div`
margin:0 20px;
display:flex;
flex-direction:column;
align-items:center;

&:hover{
    cursor:pointer;
}

`;


const ImageDiv = styled.div`

img{
    width:100%;
    border-radius:50%;
}
`;

const Text = styled.p`

margin:0;
`;








const mapTodispatch = (dispatch)=>{
    return{submitUser:(user)=>{
        dispatch(userActionCreator(user))
    }}
}


export default function Homepage(props){

const userListState = useSelector(makeSelector);    



const {submitUser} = mapTodispatch(useDispatch());

const getUserFunction = async ()=>{     
const response =  await axios.get("https://reqres.in/api/users").catch(err=>{ console.log(err)});

submitUser(response.data.data);

}

console.log("index.redux",userListState);

useEffect(()=>{
    getUserFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[userListState.length]);

let navigate = useNavigate();

// const moveTheNextpage = (id)=>{
//     navigate.push(`/user/${id}`);
// };


return (<div>{

    userListState.length>0?(
    <Container>{userListState.map((user,index)=>(
      <UserContainer key={index} onClick={()=>{navigate(`/user/${index+1 }`)}}>
       <ImageDiv>
           <img src={user.avatar} alt=""/>
       </ImageDiv>
       <Text>{user.first_name}&nbsp;{user.last_name}</Text>
      </UserContainer>)
    )}</Container>):null}
</div>)

}

// this is the userPage


const secondMapToDispatch = (dispatch)=>{
    return {addUser: (user)=>{
        dispatch(secondActionCreator(user))
    }}
}

function UserPage(props){

    const userListState = useSelector(secondMakeSelector);
    const { userId } = useParams();
   

    const {addUser} = secondMapToDispatch(useDispatch());
    
     

    const getUser = async ()=>{
        await axios.get(`https://reqres.in/api/users/${userId}`).then((response)=>addUser(response.data.data)).catch((err)=>console.log(err));
         
    }

    getUser();

    useEffect(()=>{
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userId]);

    


  return (<div>

<UserContainer>
            <ImageDiv>
                <img src={userListState.avatar} alt=""/>
            </ImageDiv>
            <Text>{userListState.first_name}&nbsp;{userListState.last_name}</Text>
            <Text>{userListState.email}</Text>
        </UserContainer>

  </div>)
}




export {UserPage};