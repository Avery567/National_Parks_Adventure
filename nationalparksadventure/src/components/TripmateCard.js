import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


function TripmateCard({ tripmate, userTrip, handleDeleteTripmate }) {
    return (
    <div>
        <span id="singleitem">
            {tripmate.username}
            <Button onClick={()=>handleDeleteTripmate(userTrip.id)} style={{float: 'right'}} size="small" icon={<DeleteOutlined  />} />
        </span>
    </div>
    )
}

export default TripmateCard