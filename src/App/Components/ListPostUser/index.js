import React from 'react';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import MainButton from '../MainButton';
import CommentList from '../CommentList';
import {getCommentPost, setEmptyComment} from '../../../reducers/post/action'
import './index.scss';
import IgnoreButton from '../IgnoreButton';
const Panel = Collapse.Panel;


const ListPostUser = ({posts, comments, getComment, closeComment})=>{
    return(
        <div className="list-post-user-container">
            <Collapse accordion>
                {
                    
                    posts.map((data, index)=>(
                        <Panel header={data.title} key={index}>
                            <p>{data.body}</p>

                            {
                                comments.length === 0 ?
                                <MainButton action={()=>getComment(data)} label={`LOAD COMMENT`}/>
                                : <IgnoreButton action={()=>closeComment(data)} label={`CLOSE COMMENT`}/>
                            }
                            

                            <CommentList comments={comments} />
                        </Panel>
                    ))
                }

            </Collapse>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        posts : state.user_list.posts,
        comments : state.posts.comments
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        getComment : (post)=>{
            dispatch(getCommentPost(post))
        },
        closeComment : ()=>{
            dispatch(setEmptyComment());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPostUser);