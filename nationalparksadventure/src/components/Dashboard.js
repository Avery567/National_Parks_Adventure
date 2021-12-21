import { Layout, Menu} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LogIn from './LogIn';
import ParkFullDetail from "./ParkFullDetail";



const { Header, Content, Sider } = Layout;

function Dashboard({ handleLogoutClick, trips, setTrip, onLogin, user }) {
    // console.log(trips)
    useEffect(() => {
        fetch("/api/trips").then((r) => {
            if (r.ok) {
            r.json().then((trips) => setTrip(trips));
            }
        });
        }, []);
       

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
                            <Link to="/">
                                Current Tabs
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <Link to="/new">
                                Start New Tab
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={3}>
                            <Link to="/archieves">
                                Completed Tabs
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={4} onClick={handleLogoutClick}>Logout</Menu.Item>
                    </Menu>
                </Sider>
            <Layout>
                <Content id='content'>
                    <Routes>
                     
                        {/* <Route path="/" element={<CurrentTabs user={user} />}></Route>
                        <Route path="/new" element={<NewTab curr_user={user} />}></Route>
                        <Route path="/archieves" element={<CompletedTabs user={user} />}></Route> */}
                    </Routes>
                    hello
                </Content>
            </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard