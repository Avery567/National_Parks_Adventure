import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { useState } from 'react';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import { Popconfirm, Popover, Avatar } from 'antd';


function TripCard({ parks, trip, user, handleDeleteTrip }) {
 console.log(parks)

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
              Trip to: {trip.name} 
              <button onClick = {() => handleDeleteTrip(trip.id)}>Remove Trip</button>       
            </div> 
        </div>
    )
}

export default TripCard