import { Layout, Menu} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LogIn from './LogIn';
import TripContainer from "./TripContainer";



const { Header, Content, Sider } = Layout;

function Dashboard({ handleLogoutClick, onLogin, user, parks, trips, setTrip, handleSaveParkDetail }) {

    
    useEffect(() => {
        // auto-login
        fetch("/api/me").then((r) => {
            if (r.ok) {
            r.json().then((user) => onLogin(user));
            }
        });
        }, []);
    
    if (!user) return ("You have to sign in first")


    return (
        <Layout className="box">
            <Layout>
                <Sider width={300} id="sidebar">
                    <Menu
                    mode="inline"
                    >
                        <Menu.Item key={0} disabled icon={<SmileOutlined />}>Hello, {user.username}</Menu.Item>
                        <Menu.Item key={1}>


                        </Menu.Item>
                        <Menu.Item key={2}>
                    
                          
         
                        </Menu.Item>
                        <Menu.Item key={3}>
                     
        
                       
                        </Menu.Item>
                        <Menu.Item key={4} onClick={handleLogoutClick}>Logout</Menu.Item>
                    </Menu>
                </Sider>
            <Layout>
                <Content id='content'>
                    {/* <Routes> */}
                        {/* <Route element={}></Route> */}
                        {/* <Route path="/new" element={<NewTab curr_user={user} />}></Route> */}
                        {/* <Route path="/archieves" element={<CompletedTabs user={user} />}></Route> */}
                    {/* </Routes> */}
                    <TripContainer trips={trips} setTrip={setTrip} parks={parks} handleSaveParkDetail={handleSaveParkDetail}/>
                </Content>
            </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard