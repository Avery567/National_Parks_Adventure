import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { Popconfirm, Popover, Avatar } from 'antd';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import TripmateCard from "./TripmateCard";
import DebounceSelect from './DebounceSelect';

function TripmateList ({trip, trips, user, setTrip}) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [errors, setErrors] = useState([]);
    const [tripmates, setTripmates] = useState(trip.users);
    const [allUsers, setAllUsers] = useState([]);
    const [userTrips, setUserTrips] = useState([]);
    const [value, setValue] = useState([]);
    const [form] = Form.useForm();
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
    setIsModalVisible(false);
    };

    async function fetchUserList(value) {
        return fetch("/api/users")
            .then(r=>r.json())
            .then((data)=>
                data.map((user)=>({
                    label: `${user.id} ${user.username}`,
                    value: user.email
                }))
            )
    }

    useEffect(()=>{
        fetch('/api/users').then(r=>r.json()).then(setAllUsers)
      },[])

    function handleAddUserToTrip(trip_id) {
        const users = value.map(v=>{return(v.label.split(' ')[0])})
        users.map((user)=>{
            fetch("/api/usertrips", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: parseInt(user),
                    trip_id: trip_id
                }),
            }).then((r)=>{
                if (r.ok) {
                    r.json().then(usertrip => {
                        const newTripmate = allUsers.find(tripmate=>{
                            return (tripmate.id === usertrip.user_id)
                        })
                        setTripmates([...tripmates, newTripmate])
                    })
                } else {
                    r.json().then((err)=>setErrors([...errors, err.errors]))
                }
            })
        })
        form.resetFields()
    }

    useEffect(()=>{
        fetch('/api/usertrips').then(r=>r.json()).then(setUserTrips)
      },[])

    // console.log(userTrips)

    function handleDeleteTripmate(tripmate_id) {
        const userTripToDelete = userTrips.find(userTrip=>{
            return (tripmate_id === userTrip.user_id)
        })
        console.log(userTripToDelete)
        fetch(`/api/usertrips/${userTripToDelete.id}`,{
            method:"DELETE"
        })
        .then(r=>{
            if (r.ok) {
                r.json().then(
                    setTripmates(tripmates.filter(tripmate => tripmate.id !== tripmate_id))
                )
            }
        })
      }



  return (
    <>
        <h2>Tripmates</h2>
        <div id="tripmate" >
            {tripmates.length>1? 
            <Space direction="vertical">
                {tripmates.map((tripmate)=>{
                    return (<TripmateCard key={tripmate.id} tripmate={tripmate} userTrips={userTrips} handleDeleteTripmate={handleDeleteTripmate}/>)
                })}
            </Space>:
                <p>No tripmate at the moment, invite new tripmates!</p>} 
                {/* {userTrips.map(userTrip=><TripmateCard key={userTrip.id} userTrip={userTrip}/>)} */}
        </div>
        <Button onClick={showModal}>
        <PlusOutlined />
        Invite Tripmates
      </Button>
      <Modal title="Invite New Tripmate" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <Form
              name="newtripmate"
              form={form}
              labelCol={{
                  span: 6,
              }}
              wrapperCol={{
                  span: 16,
              }}
              autoComplete="off"
              onFinish={()=>handleAddUserToTrip(trip.id)}
          >
              <Form.Item
                    label="Tripmates"
                    name="tripmates"
                    rules={[
                    {
                        required: true,
                        message: 'Please select tripmates!',
                    },
                    ]}
                >
                    <DebounceSelect
                        mode="multiple"
                        value={value}
                        placeholder="Select users"
                        fetchOptions={fetchUserList}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Form.Item>
              <Form.Item
                  wrapperCol={{
                  offset: 10,
                  span: 16,
                  }}
              >
                  <Button htmlType="submit">
                    Add
                  </Button>
              </Form.Item>
          </Form>
      </Modal>

        
    </> 
  )
}

export default TripmateList