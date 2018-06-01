import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route, Link} from 'react-router-dom';
import Login from '../../Containers/Login';
import './index.scss';
import Dashboard from '../../Containers/Dashboard'
import User from '../../Containers/User'
import Post from '../../Containers/Post'
import Comment from '../../Containers/Comment'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const SideMenu = ({})=>{
    return(
        <Layout>
            <div className="layout-side-container">
                <Header className="header">
                <Menu
                    mode="horizontal"
                >
                    
                </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                                <Link to="/dashboard"> 
                                    <Icon type="dashboard" />
                                    <span className="nav-text">Dashboard</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/dashboard/user"> 
                                    <Icon type="user" />
                                    <span className="nav-text">User</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/dashboard/post"> 
                                    <Icon type="file-text" />
                                    <span className="nav-text">Post</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/dashboard/comment"> 
                                    <Icon type="message" />
                                    <span className="nav-text">Comment</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>

                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route path="/dashboard/user" component={User} />
                            <Route path="/dashboard/post" component={Post} />
                            <Route path="/dashboard/comment" component={Comment} />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </Layout>
    )
}

export default SideMenu;