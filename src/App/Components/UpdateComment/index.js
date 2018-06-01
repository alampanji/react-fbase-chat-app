import React from 'react';
import { Form, Input, Button, message } from 'antd';
import ButtonSubmit from '../ButtonSubmit';
import {put} from '../../api/service';
import Constant from '../../../config/constant';
const FormItem = Form.Item;
const { TextArea } = Input;

class FormUpdateComment extends React.Component {

  constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          const URL = Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT + "/" +this.props.data.id;
          const contentData = {
            ...values,
            id:this.props.data.id,
            postId:this.props.data.postId
          }
          put(URL, contentData).then(response=>{
              if(response.status === 200){
                  message.success('Success update comment');
                  this.props.closeModal();
              }
              else{
                message.error('Failed to update comment');
              }
          })
      }
    });
  }
  
  
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout={`vertical`} onSubmit={this.handleSubmit}>
        <FormItem
          label="Name"
        >
          {getFieldDecorator('name', {
            initialValue: this.props.data.name,
            rules: [{
              required: true, message: 'Please input your name!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Content"
        >
          {getFieldDecorator('body', {
            initialValue: this.props.data.body,
            rules: [{
              required: true, message: 'Please input body content!',
            }],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          label="Email"
        >
          {getFieldDecorator('email', {
             initialValue: this.props.data.email,
            rules: [
            {
              type: 'email', message: 'The input is not valid E-mail!',
            },
            {
              required: true, message: 'Please input your email!',
            }],
          })(
            <Input type="email" />
          )}
        </FormItem>
        <ButtonSubmit label={`UPDATE`} />
      </Form>
    );
  }
}

const UpdateComment = Form.create()(FormUpdateComment);

export default UpdateComment;