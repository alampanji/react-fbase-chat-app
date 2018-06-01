import React from 'react';
import {Row, message, Col, Form, Input, Button, Icon} from 'antd';
import './index.scss';
import {Redirect} from 'react-router-dom';
const FormItem = Form.Item;

class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isSuccess : false,
            isLoading : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({isLoading:true});
                const contentData = values;

                if(contentData.username=='admin' && contentData.password=='welcome1'){
                    this.setState({isSuccess: true});
                    message.success('Success Login');
                }
                else{
                    this.setState({isLoading:false});
                    message.error('Failed Login, Check your username and password');
                }
            }
          });
    }
    
    render(){

        const { getFieldDecorator } = this.props.form;

        return(
            <div className="login-container">

                {
                    this.state.isSuccess ? <Redirect to="/dashboard" /> :

                    <Row>
                        <Col xs={6} offset={10}>
                        <h3>Login</h3>
                        <Form 
                            onSubmit={this.handleSubmit} 
                            className="login-form"
                            hideRequiredMark={true}
                            >
                                <FormItem
                                    colon={false}
                                    label="Username"
                                    
                                >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Username is required!' }],
                                })(
                                    <Input addonAfter={<Icon type="user" />} size="large" placeholder="input username" style={{height:"50px"}} />
                                )}
                                </FormItem>
                                <FormItem
                                    colon={false}
                                    label="Password"
                                >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Password is required!' }],
                                })(
                                <Input addonAfter={<Icon type="unlock" />} size="large" type="password" placeholder="input password" style={{height:"50px"}} />
                                )}
                                </FormItem>
                                <FormItem>    
                                    <Col span={12}>
                                        <Button className="submit__btn" size="large" htmlType="submit" loading={this.state.isLoading}>
                                            Login
                                        </Button>    
                                    </Col>                             
                                </FormItem>
                            </Form>
                            </Col>
                    </Row>
                
                }
                
            </div>
        )
    }
}

const Login = Form.create()(LoginForm);

export default Login;