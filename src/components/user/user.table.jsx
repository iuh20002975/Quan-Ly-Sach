
import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';



const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);

    //empty array => run one 
    useEffect(() => {
        console.log("run useEffect 111");
        loadUser();
    }, []);


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

        },
        {
            title: 'FullName',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },

    ];

    const loadUser = async () => {

        const res = await fetchAllUserAPI()
        setDataUser(res.data)

    }

    console.log(">>>run render 000");
    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )
}
export default UserTable;