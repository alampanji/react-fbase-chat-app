import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import './index.scss';


const CommentList = ({comments})=>{
    return(
        <div className="comment-list-container">
            {
                comments.length > 1 ?

                comments.map((data, index)=>(
                    <Row className="comment__list" key={index}>
                        <div className="title__container">
                            <h3>Title: {data.name}</h3>
                        </div>

                        <div className="body__container">
                            <p>{data.body}</p>
                        </div>

                        <div className="created__by">
                            <p>created by: <span>{data.email}</span></p>
                        </div>
                        
                    </Row>
                ))
                
                
                : null
                
            }
            
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        comments : state.posts.comments
    }
}

export default CommentList;