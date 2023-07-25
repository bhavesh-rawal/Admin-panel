import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
const Sidebar = () => {

    type MenuItem = Required<MenuProps>['items'][number];
    const navigate = useNavigate()


    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
        path?: '/dashboard',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
            path,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Dashboard', 'dashboard', <PieChartOutlined />),
        getItem('Category', 'category', <DesktopOutlined />),
        getItem('Product', 'product', <ContainerOutlined />),

        getItem('Navigation ', 'sub1', <MailOutlined />, [
            getItem('Option 1', '1'),
            getItem('Option 2', '2'),
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
        ]),

        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),

            getItem('Submenu', 'sub3', null,
                [getItem('Option 7', '7'),
                getItem('Option 8', '8')]),
        ]),
    ];


    // submenu keys of first level
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const [openKeys, setOpenKeys] = useState(['']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    {

    }
    const onClick: MenuProps['onClick'] = (Keys) => {
        if (Keys.key == "dashboard") {
            navigate("/")
        }
        else if (Keys.key == "product") {
            navigate("/product")
        }
        else if (Keys.key == "category") {
            navigate("/category")
        }
    }
    return (<>
        <div style={{ width: 256, height: 100 }}>
            <Button className='position-absolute' type="primary" onClick={toggleCollapsed} style={{ left: 250, top: 12 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                className='sideBar-sticky'
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                defaultSelectedKeys={['dashboard']}
                //     defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                onClick={onClick}
            />
        </div>

    </>)
}
export default Sidebar