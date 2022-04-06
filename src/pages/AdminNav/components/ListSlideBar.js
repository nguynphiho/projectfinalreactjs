import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 360,
        height: '100vh',
    },
    listItem: {
        height: '72px',
        paddingLeft: '20px',
        '&:hover': {
            backgroundColor: '#e0e0e0 !important',
            color: '#696cff',
        }
    },

    listSubItem: {
        height: '60px',
        paddingLeft: '80px',
        '&:hover': {
            backgroundColor: '#e0e0e0 !important',
            color: '#696cff',
        }
    },

    activeSubMenu: {
        backgroundColor: '#e0e0e0 !important',
        color: '#696cff',
    },

    activeMenu: {
        backgroundColor: '#696cff',
        color: 'white',
    }
}));

const listMenuData = [
    {
        key: 'dashboard',
        name: 'DashBoard',
        path: '/admin/dashboard',
        icon: <DashboardIcon />,
    },
    {
        key: 'manage_products',
        name: 'Manage Products',
        path: '/admin/manage-prods',
        icon: <BallotIcon />,
        subMenu: [
            {
                key: 'manage_products_list',
                name: 'List All Products',
                path: '/admin/manage-prods',
            },
            {
                key: 'manage_products_details',
                name: 'Add Product',
                path: '/admin/addproduct',
            },
        ]
    },
    {
        key: 'manage_user',
        name: 'Manage Users',
        path: '/admin/manage-users',
        icon: <AccountCircleIcon />,
        subMenu: [
            {
                key: 'manage_user_list',
                name: 'Lists',
                path: '/admin/manage-users',
            },
            {
                key: 'manage_user_profile',
                name: 'Profile User',
                path: '/admin/manage-users/profile',
            },
        ]
    },
    {
        key: 'manage_role',
        name: 'Manage Roles',
        path: '/admin/manage-roles',
        icon: <VerifiedUserIcon />
    },
    {
        key: 'admin_settings',
        name: 'Setting',
        path: '/admin/setting',
        icon: <SettingsIcon />
    },


]

function ListSlideBar({ location, drawerOpen }) {
    const classes = useStyles();
    const [activeKey, setActiveKey] = useState("");
    const handleSetActiveKey = (key) => {
        if (activeKey === key) {
            setActiveKey("")
        } else {
            setActiveKey(key);
        }
    }
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    listMenuData.map((element) => (
                        <div key={element.key}>
                            <ListItem
                                key={element.key}
                                component={Link}
                                to={element.path}
                                button
                                onClick={() => handleSetActiveKey(element.key)}
                                className={clsx(classes.listItem, {
                                    [classes.activeMenu]: ((activeKey === element.key) || (location.pathname === element.path))
                                })}

                            >
                                <ListItemIcon>
                                    {element.icon}
                                </ListItemIcon>
                                <ListItemText primary={element.name} />
                            </ListItem>
                            
                            <Collapse in={(activeKey === element.key) && drawerOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        Array.isArray(element.subMenu) && element.subMenu.map(item => (
                                            <ListItem
                                                key={item.key}
                                                component={Link}
                                                to={item.path}
                                                button
                                                className={clsx(classes.listSubItem, {
                                                    [classes.activeSubMenu]: (location.pathname === item.path)
                                                })}
                                            >
                                                <ListItemText primary={item.name} />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Collapse>
                        </div>
                    ))
                }
            </List>
        </div>
    )
}

export default ListSlideBar;