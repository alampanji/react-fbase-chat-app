import React from 'react';
import {Row, Col, Table, Button, Modal, message} from 'antd';
import HeaderTitle from '../../Components/HeaderTitle';
import MainButton from '../../Components/MainButton';
import IgnoreButton from '../../Components/IgnoreButton';
import FormAddPost from '../../Components/AddPost';
import FormUpdatePost from '../../Components/UpdatePost';
import Constant from '../../../config/constant';
import {connect} from 'react-redux';
import {deletes} from '../../api/service';
import {getPostById} from '../../../reducers/post/action';
import './index.scss';

class Post extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            modalAddPost: false,
            modalUpdatePost:false,
            selected:{}
        }
        this.modalAddClose = this.modalAddClose.bind(this);
        this.addPost = this.addPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.modalUpdateClose = this.modalUpdateClose.bind(this);
    }

    componentDidMount(){
        this.getData();
    }
    
    async getData(){
        const response = await fetch(Constant.MASTER_PATH_API + Constant.URL_GET_POST);
        const data = await response.json();
        const constructPayload = data.map(obj=>
            ({...obj, key:obj.id}
        ))
        this.setState({
            data:constructPayload,
        })
    }

    
    modalAddClose(){
        this.setState({
            modalAddPost: false
        })
    }

    modalUpdateClose(){
        this.setState({
            modalUpdatePost: false
        })
    }

    addPost(){
        this.setState({
            modalAddPost:true
        })
    }

    updatePost(data){
        this.props.getPostData(data);
        this.setState({
            modalUpdatePost:true,
        })
    }

    delete(id){
        const url = Constant.MASTER_PATH_API + Constant.URL_GET_POST + '/' + id
        deletes(url).then(response=>{
            if(response.status === 200){
                message.success('Success delete posts'); 
                this.getData();  
            }
            else{
              message.error('Failed to add new post');
            }
        })
    }

    render(){
          
        const columns = [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            }, 
            {
                title: 'Action',
                dataIndex: 'id',
                key: 'id',
                render: (id) => (
                    <div>
                        <MainButton action={()=>this.updatePost(id)} label={`UPDATE`} />
                        <IgnoreButton action={()=>this.delete(id)} label={`DELETE`} />
                    </div>
                )
            }
        ];
          

        return(
            <div className="user-container">
                <HeaderTitle title={`Post`} subtitle={`List of User Content Post`}/>
                <MainButton label={`ADD POST`} action={this.addPost} />
                <Table dataSource={this.state.data} columns={columns} />

                <Modal
                    title="Add Post"
                    visible={this.state.modalAddPost}
                    onCancel={this.modalAddClose}
                    footer={null }
                    width="50%"
                    >
                        <FormAddPost closeModal={this.modalAddClose} />
                </Modal>

                <Modal
                    title="Update Post"
                    visible={this.state.modalUpdatePost}
                    onCancel={this.modalUpdateClose}
                    footer={null }
                    width="50%"
                    >
                    <FormUpdatePost data={this.props.selectedPost} closeModal={this.modalUpdateClose} />
                </Modal>
            </div>
        )
    }
    
}

const mapStateToProps = state=>{
    return{
        selectedPost: state.posts.current
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getPostData : (id)=>{
            dispatch(getPostById(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post);