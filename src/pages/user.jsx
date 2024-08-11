import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);

    //empty array => run one 
    useEffect(() => {
        console.log("run useEffect 111");
        loadUser();
    }, []);

    const loadUser = async () => {

        const res = await fetchAllUserAPI()
        setDataUser(res.data)

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUser={dataUser}
                loadUser={loadUser}
            />
        </div>
    )
}
export default UserPage;