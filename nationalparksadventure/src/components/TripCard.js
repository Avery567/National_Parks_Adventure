import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { useState, useEffect } from 'react';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import { Popconfirm, Popover, Avatar } from 'antd';


function TripCard({ parks, trip, user, handleDeleteTrip }) {
//  console.log(parks)
 const [parkDetails, setParkDetails] = useState([]);

 useEffect(()=>{
    fetch('/api/parkdetails').then(r=>r.json()).then(setParkDetails)
  },[])

  console.log(trip)
    return (
        <div id="tripcard">
{/* {/* //             <Space>
//                 <Button onClick={showModal}>
//                     <PlusOutlined />
//                     New Item
//                 </Button>
//                 <Modal title="Create New Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
//                     <Form
//                         name="newitem"
//                         form={form}
//                         labelCol={{
//                             span: 6,
//                         }}
//                         wrapperCol={{
//                             span: 16,
//                         }}
//                         autoComplete="off"
//                         onFinish={handleSubmit}
//                     >
//                         <Form.Item
//                             label="Name"
//                             name="name"
//                             rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input item name!',
//                             },
//                             ]}
//                         >
//                             <Input name="name" onChange={(e)=>{
//                                 setItemName(e.target.value)
//                             }} />
//                         </Form.Item>
//                         <Form.Item
//                             label="Cost"
//                             name="cost"
//                             rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input item cost!',
//                             },
//                             ]}
//                         >
//                             <InputNumber style={{ width: '100%' }} step="0.0001" name="cost" onChange={(value)=>setItemValue(value)} />
//                         </Form.Item>
//                         <Form.Item
//                             wrapperCol={{
//                             offset: 10,
//                             span: 16,
//                             }}
//                         >
//                             <Button htmlType="submit">
//                             Submit
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                 </Modal>
//                 <Popconfirm
//                     title="Are you sure you want to delete this tab? All items will be deleted all together. Think twice!!"
//                     visible={visible}
//                     onConfirm={handleOkToDelete}
//                     onCancel={handleCancelDelete}
//                     okText="Yes"
//                     >
//                     <Button onClick={showPopconfirm}>
//                         <DeleteOutlined  />
//                         Delete Tab
//                     </Button>
//                 </Popconfirm>
//                 <Button onClick={showConfirm}>
//                     <DollarCircleOutlined />
//                     Settle
//                 </Button>
//                 <Popover placement="bottomLeft" content={participants} trigger="click">
//                     <Button>
//                         <UsergroupDeleteOutlined />
//                         Participants
//                     </Button>
//                 </Popover>
//                 You Currently owe:  ${ownAmount}
//             </Space> */}
            <div id="tripcard">
              Park Name: {trip.name} 
              <button onClick = {() => handleDeleteTrip(trip.id)}>Remove Trip</button>       
            </div> 
            <div>
                <img src= {trip.parkdetails[0].images} height="300rem" width="400rem"/>
                <p>Description: {trip.parkdetails[0].description}</p>
                <p>State: {trip.parkdetails[0].states}</p>
                <p>Contacts: {trip.parkdetails[0].contacts}</p>
                <p>Entrance Fee: {trip.parkdetails[0].entrancefee}</p>
                <p>Directions: {trip.parkdetails[0].directionsinfo}</p>
                <p>Directions Url: {trip.parkdetails[0].directionsurl}</p>
                <p>Operating Hours: {trip.parkdetails[0].operatinghours}</p>
                <p>Addresses: {trip.parkdetails[0].addresses}</p>
                <p>Weather Info: {trip.parkdetails[0].weatherinfo}</p>
            </div>
        </div>
    )
}

export default TripCard