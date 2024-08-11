
import { Link, NavLink } from 'react-router-dom';
// import './header.css';
import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, ContainerOutlined } from '@ant-design/icons';
import { useState } from 'react';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/books"}>Book</Link>,
            key: 'books',
            icon: <ContainerOutlined />,

        },

    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header;