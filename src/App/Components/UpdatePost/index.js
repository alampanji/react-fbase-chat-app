import React from 'react';
import { Form, Input, Button, message } from 'antd';
import ButtonSubmit from '../ButtonSubmit';
import {put} from '../../api/service';
import Constant from '../../../config/constant';
const FormItem = Form.Item;
const { TextArea } = Input;

class FormUpdatePost extends React.Component {

  constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          const URL = Constant.MASTER_PATH_API + Constant.URL_GET_POST + "/" +this.props.data.id;
          const contentData = {
            ...values,
            id:this.props.data.id,
            userId:this.props.data.userId
          }
          put(URL, contentData).then(response=>{
              if(response.status === 200){
                  message.success('Success update posts');
                  this.props.closeModal();
              }
              else{
                message.error('Failed to add post');
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
            initialValue: this.props.data.title,
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
            initialValue: this.props.data.body,
            rules: [{
              required: true, message: 'Please input body content!',
            }],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <ButtonSubmit label={`UPDATE`} />
      </Form>
    );
  }
}

const UpdatePost = Form.create()(FormUpdatePost);

export default UpdatePost;