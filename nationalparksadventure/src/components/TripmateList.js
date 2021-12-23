import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Space, Modal, InputNumber, Form, Input, message } from 'antd';
import { Popconfirm, Popover, Avatar } from 'antd';
import { PlusOutlined, DeleteOutlined, ExclamationCircleOutlined,  DollarCircleOutlined, UserOutlined, UsergroupDeleteOutlined  } from '@ant-design/icons';
import TripmateCard from "./TripmateCard";

function TripmateList ({trip, user}) {

    
    const tripmates = (
        <Space direction="vertical">
            {trip.users.map((user)=>{
                return (<Space key={user.id}><Avatar icon={<UserOutlined />} />{user.username}</Space>)
            })}
        </Space>
    )
  return (

        <div id="tripmate" >
            <p>Tripmate(s): {tripmates}</p>
            <TripmateCard/>
            <button>Add Tripmates</button>  
        </div>
        

  )
}

export default TripmateList