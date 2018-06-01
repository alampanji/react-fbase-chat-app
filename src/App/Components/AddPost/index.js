import React from 'react';
import { Form, Input, Button, message } from 'antd';
import ButtonSubmit from '../ButtonSubmit';
import {post} from '../../api/service';
import Constant from '../../../config/constant';
const FormItem = Form.Item;
const { TextArea } = Input;

class FormAddPost extends React.Component {

  constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          const URL = Constant.MASTER_PATH_API + Constant.URL_GET_POST;
          post(URL, values).then(response=>{
              if(response.status === 201){
                  message.success('Success add new posts');
                  this.props.closeModal();
              }
              else{
                message.error('Failed to add new post');
              }
          })
      }
    });
  }
  
  
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form layout={`vertical`} onSubmit={this.handleSubmit}>
        <FormItem
          label="Title"
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Please input your title!',
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
        <ButtonSubmit label={`SUBMIT`} />
      </Form>
    );
  }
}

const AddPost = Form.create()(FormAddPost);

export default AddPost;