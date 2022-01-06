import { Button, Modal, Form, Input, Alert, message } from 'antd';
import { useState } from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import '../signuplogin.css'

function Login({ onLogin }) {
    const navigate = useNavigate()
    const [isLoginVisible, setLoginVisible] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    function showLogin() {
        setLoginVisible(true)
    }
    function handleClose() {
        setLoginVisible(false)
    }


    function handleSubmit() {
        fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => {
                  onLogin(user)
                  navigate("/dashboard")
                });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }
    function handleInputChange(e) {
        setLoginInfo({
            ...loginInfo, [e.target.name]:e.target.value
        })
    }
    return (
        <>
            <a className="navbar__link" onClick={showLogin}>Log In</a>
            {/* <div id="logintab" > */}
            <Modal 
                title="User Login" 
                visible={isLoginVisible}
                onCancel={handleClose}
                onOk={handleClose}
                footer={null}
            >
                {errors.length > 0 ?
                <div>
                    {errors.map((err,index)=>{
                        return (<Alert key={index} message={err} type="error" />)
                    })}
                    <p></p>
                </div>:null}
                <Form
                    name="login"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    autoComplete="off"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ]}
                    >
                        <Input name="email" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password name="password" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                        offset: 10,
                        span: 16,
                        }}
                    >
                        <Button htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            {/* </div> */}
        </>
    )
}

export default Login;

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const BackDrop = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;

`