import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


function TripmateCard({ item, handleDelete }) {
    return (
    <div>
        <span id="singleitem">
            {item.name}
            <Button onClick={()=>handleDelete(item.id)} style={{float: 'right'}} size="small" icon={<DeleteOutlined  />} />
        </span>
    </div>
    )
}

export default TripmateCard