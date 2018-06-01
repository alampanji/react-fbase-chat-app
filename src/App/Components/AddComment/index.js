import React from 'react';
import { Form, Input, Button, message } from 'antd';
import ButtonSubmit from '../ButtonSubmit';
import {post} from '../../api/service';
import Constant from '../../../config/constant';
const FormItem = Form.Item;
const { TextArea } = Input;

class FormAddComment extends React.Component {

  constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          const URL = Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT;
          post(URL, values).then(response=>{
              if(response.status === 201){
                  message.success('Success add new comment');
                  this.props.closeModal();
              }
              else{
                message.error('Failed to add new comment');
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
            rules: [{
              required: true, message: 'Please body content!',
            }],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          label="Email"
        >
          {getFieldDecorator('email', {
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
        <ButtonSubmit label={`SUBMIT`} />
      </Form>
    );
  }
}

const AddComment = Form.create()(FormAddComment);

export default AddComment;