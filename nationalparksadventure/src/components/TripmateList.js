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
                    value: user.email,
                })),
            );
    }

    // function handleDeleteTripmate(usertrip_id) {
    //     fetch(`/api/usertrips/${usertrip_id}`,{
    //         method:"DELETE"
    //     })
    //     .then(r=>{
    //       if (r.ok) {
    //           let newPackingList = packingLists.filter((packingList)=>{
    //               return (packingList.id!==id)
    //           })
    //           setPackingLists(newPackingList)
    //       }
    //     })
    // }

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
                    r.json().then((data)=>console.log(data))
                } else {
                    r.json().then((err)=>setErrors([...errors, err.errors]))
                }
            })
        })
        form.resetFields()
    }



  return (
    <>
        <h2>Tripmates</h2>
        <div id="tripmate" >
            {trip.users.length>1? 
            <Space direction="vertical">
                {trip.users.map((tripmate)=>{
                    return (<TripmateCard key={tripmate.id} tripmate={tripmate}/>)
                })}
            </Space>:
                <p>No tripmate at the moment, invite new tripmates!</p>} 
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