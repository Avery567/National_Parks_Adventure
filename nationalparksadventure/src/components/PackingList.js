import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import PackingCard from "./PackingCard";
import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import { Popconfirm, Popover, Avatar } from 'antd';


function PackingList ({trip, user}) {
  // console.log(user.id)
  const [packingLists, setPackingLists] = useState(trip.packinglists)
  const [errors, setErrors] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [itemName, setItemName] = useState('')
  const [visible, setVisible] = useState(false);
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
  function handleDeletePackingList(id) {
      fetch(`/api/packinglists/${id}`,{
          method:"DELETE"
      })
      .then(r=>{
        if (r.ok) {
            let newPackingList = packingLists.filter((packingList)=>{
                return (packingList.id!==id)
            })
            setPackingLists(newPackingList)
        }
      })
  }
  const success = () => {
    message.success('New Item Created!');
  };

  const handleAddItemToPackingList = () => {
    fetch("/api/packinglists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            trip_id: trip.id,
            name: itemName,
            user_id: user.id
        }),
    }).then(r=>{
            if (r.ok) {
                r.json().then((new_item=>{
                  setPackingLists([...packingLists, new_item])
                    success()
                }))
            } else {
                r.json().then((err)=>setErrors([...errors, err.errors]))
            }
        })
    form.resetFields()
  }

  return (
    <>
      <h2>Packing List:</h2>
      <div id="packingcard" >
        
        {packingLists.length>0? 
          <Space direction="vertical">
              {packingLists.map((packingList)=>{
                  return (<PackingCard key={packingList.id} packingList={packingList} handleDeletePackingList={handleDeletePackingList} />)
              })}
          </Space>:
              <p>No item at the moment, please add new items!</p>}
       </div>
      <Button onClick={showModal}>
        <PlusOutlined />
        New Item
      </Button>
      <Modal title="Create New Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <Form
              name="newitem"
              form={form}
              labelCol={{
                  span: 6,
              }}
              wrapperCol={{
                  span: 16,
              }}
              autoComplete="off"
              onFinish={handleAddItemToPackingList}
          >
              <Form.Item
                  label="Item to bring"
                  name="name"
                  rules={[
                  {
                      required: true,
                      message: 'Please input item name!',
                  },
                  ]}
              >
                  <Input name="name" onChange={(e)=>{
                      setItemName(e.target.value)
                  }} />
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

    </>
  )
}

export default PackingList