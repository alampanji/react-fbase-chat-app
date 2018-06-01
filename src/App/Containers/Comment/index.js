import React from 'react';
import {Row, Col, Table, Button, Modal, message} from 'antd';
import HeaderTitle from '../../Components/HeaderTitle';
import MainButton from '../../Components/MainButton';
import IgnoreButton from '../../Components/IgnoreButton';
import FormAddComment from '../../Components/AddComment'
import FormUpdateComment from '../../Components/UpdateComment';
import Constant from '../../../config/constant';
import {connect} from 'react-redux';
import {deletes} from '../../api/service';
import {getCommentById} from '../../../reducers/comment/action';
import './index.scss';

class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            modalAddComment: false,
            modalUpdateComment:false,
            selected:{}
        }
        this.modalAddClose = this.modalAddClose.bind(this);
        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.modalUpdateClose = this.modalUpdateClose.bind(this);
    }

    componentDidMount(){
        this.getData();
    }
    
    async getData(){
        const response = await fetch(Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT);
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
            modalAddComment: false
        })
    }

    modalUpdateClose(){
        this.setState({
            modalUpdateComment: false
        })
    }

    addComment(){
        this.setState({
            modalAddComment:true
        })
    }

    updateComment(data){
        this.props.getCommentData(data);
        this.setState({
            modalUpdateComment:true
        })
    }

    delete(id){
    const url = Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT + '/' + id
        deletes(url).then(response=>{
            if(response.status === 200){
                message.success('Success delete comment'); 
                this.getData();  
            }
            else{
              message.error('Failed to delete new comment');
            }
        })
    }

    render(){
          
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, 
            {
                title: 'Posted By',
                dataIndex: 'email',
                key: 'email',
            }, 
            {
                title: 'Action',
                dataIndex: 'id',
                key: 'id',
                render: (id) => (
                    <div>
                        <MainButton action={()=>this.updateComment(id)} label={`UPDATE`} />
                        <IgnoreButton action={()=>this.delete(id)} label={`DELETE`} />
                    </div>
                )
            }
        ];
          

        return(
            <div className="user-container">
                <HeaderTitle title={`Comment`} subtitle={`List of Comment`}/>
                <MainButton label={`ADD NEW COMMENT`} action={this.addComment} />
                <Table dataSource={this.state.data} columns={columns} />

                <Modal
                    title="Add Comment"
                    visible={this.state.modalAddComment}
                    onCancel={this.modalAddClose}
                    footer={null }
                    width="50%"
                    >
                        <FormAddComment closeModal={this.modalAddClose} />
                </Modal>

                <Modal
                    title="Update Comment"
                    visible={this.state.modalUpdateComment}
                    onCancel={this.modalUpdateClose}
                    footer={null }
                    width="50%"
                    >
                    <FormUpdateComment data={this.props.selectedComment} closeModal={this.modalUpdateClose} />
                </Modal>
            </div>
        )
    }
    
}

const mapStateToProps = state=>{
    return{
        selectedComment: state.comments.data
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getCommentData : (id)=>{
            dispatch(getCommentById(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Comment);