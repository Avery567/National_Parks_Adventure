import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


function TripmateCard({ tripmate, userTrip, handleDeleteTripmate }) {

    // console.log(userTrip)
    return (
    <div>
            <a><Button onClick={()=>handleDeleteTripmate(tripmate.id)} style={{float: 'right'}} size="small" icon={<DeleteOutlined  />} /></a>

            {tripmate.username}

    </div>
    )
}

export default TripmateCard