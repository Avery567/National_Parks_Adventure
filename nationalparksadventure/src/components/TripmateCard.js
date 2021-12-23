import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


function TripmateCard({ tripmate, userTrip, handleDeleteTripmate }) {

    // console.log(userTrip)
    return (
    <div>
        <span id="singleitem">
            {tripmate.username}
            <Button onClick={()=>handleDeleteTripmate(tripmate.id)} style={{float: 'right'}} size="small" icon={<DeleteOutlined  />} />
        </span>
    </div>
    )
}

export default TripmateCard