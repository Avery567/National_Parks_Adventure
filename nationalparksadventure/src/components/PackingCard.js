import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function PackingCard({ packingList, handleDeletePackingList }) {
    return (
    <div>
        <span id="singleitem">
            {packingList.name}
            <Button onClick={()=>handleDeletePackingList(packingList.id)} style={{float: 'right'}} size="small" icon={<DeleteOutlined  />} />
        </span>
    </div>
    )
}

export default PackingCard