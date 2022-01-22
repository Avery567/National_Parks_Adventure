import { Layout, Menu} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Search from './Search';
import styled from 'styled-components';
import TripContainer from "./TripContainer";
import ninja from '../asset/ninja.png';
import {RiLogoutBoxFill} from "react-icons/ri";
import '../App.css'



const { Header, Content, Sider } = Layout;

function Dashboard({ parkDetails, handleLogoutClick, onLogin, user, parks, trips, setTrip,handleSearch, handleSaveParkDetail }) {

    useEffect(() => {
        // auto-login
        fetch("/api/me").then((r) => {
            if (r.ok) {
            r.json().then((user) => onLogin(user));
            }
        });
        }, []);

    const greeting = () => {
        const today = new Date()
        const curHr = today.getHours()

        if (curHr < 12) {
            return ('Good Morning, ')
        } else if (curHr < 18) {
            return ('Good Afternoon, ')
        } else {
            return ('Good Evening, ')
        }
    }

    const [form, setForm] = useState("")

    const handleForm = (e) => setForm(e.target.value)
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("submitted");
      handleSearch(form)
    }
    
    if (!user) return ("You have to sign in first")


    return (
        <Container>
            <Sidebar>
                <ProfileContainer>
                    <Avatar src={ninja} />
                    <Name> {user.username} </Name>
                </ProfileContainer>
                    <Menu
                    mode="inline"
                    >
                        {/* <Menu.Item key={1}>

                        </Menu.Item>
                        <Menu.Item key={2}>
                    
                        </Menu.Item>
                        <Menu.Item key={3}>

                        </Menu.Item> */}
                        {/* <Menu.Item key={4} onClick={handleLogoutClick}>Logout</Menu.Item> */}
                        <LinksContainer>
                            <Links>
                                <SingleLink>
                                    <h3><RiLogoutBoxFill/></h3>
                                    <h3 onClick={handleLogoutClick}>Logout</h3>
                                </SingleLink>
                            </Links>
                        </LinksContainer>
                    </Menu>
                </Sidebar>
  
                <MainContent>
                    <NavBarContainer>
                        <Text>
                            {greeting()}{user.username} !
                        </Text>
                        <InputContainer>
                        <form onSubmit={handleSubmit} >
                            <Input type="text" placeholder=" search for parks..." value={form} onChange= {handleForm}></Input> 
                            </form>
                        </InputContainer>
                    </NavBarContainer>
                    <SubContainer>
                        <TripContainer parkDetails={parkDetails} trips={trips} setTrip={setTrip} parks={parks} user={user} handleSaveParkDetail={handleSaveParkDetail}/>
                    </SubContainer>
                </MainContent>
        </Container>
    )
}

export default Dashboard;

const Container = styled.div`
 display: flex;
 height: 91vh;
 margin-top: 5rem;
 margin-right: 0.5rem;
 margin-left: 0.5rem;
 background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
 border-radius: 5rem;
`;

const Sidebar = styled.div`
 width: 20%;
 height: 100% !important;
 border-radius: 2rem;
 background-color: #FFC312;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 3rem

`;

const ProfileContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const Avatar = styled.img`
 height: 10rem;
 border-radius: 5rem;
 margin-top: 20%
`;

const Name = styled.h1` 
 color: white;
 font: 1.5rem;
 font-weight: 400;
 margin: 0.8rem 0 0.5rem 0;
`;

const MainContent = styled.div` 
 width: 80%;
 background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
 border-bottom-right-radius: 0.5rem;
 border-top-right-radius: 0.5rem;
 margin: 1rem 8rem 1rem 4rem;
 
`;

const SubContainer = styled.div` 
    margin: 0.5rem 0;
    height: 88%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:4rem;
    overflow-y: auto;
    margin-top: 2rem;
`;
const NavBarContainer = styled.nav` 
 display:flex;
 justify-content: space-between;
 align-item:center;
 height: 5%
`;

const Text = styled.h1` 
 span {
     font-weight: 500;
     color: #484258
 }
`;

const InputContainer = styled.div` 
    display: flex; 
    margin-right: 5rem;
`;

const Input = styled.input` 
    border:none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    width: 20rem;
    height: 2.5rem;
    background-color: #dce4ff;
    &:focus {
        border: none;
        outline: none;
    }
`;

const LinksContainer = styled.div` 
    background-color: #FFC312;
    height: 100%;
    width: 100%;
`;

const Links = styled.ul` 
 list-style-type: none;
 display: flex;
 flex-direction: column;
 padding-top: 2rem;
 height: 60%;
`;

const SingleLink = styled.li` 
 margin-left: 25%;
 margin-bottom: 2rem;
 align-items: center;
 display: flex;
 gap: 1rem;
 aligh-item: center;
 cursor: pointer;
 h3 {
     font-weight: 500;
     color: white;
 }

 svg {
     font-size: 1.1rem;
     margin-top: 3%;
 }
`;