import React from "react";
import {Avatar, Button, Card, Form, Input} from "antd";

const dummy ={
    isLoggedIn:true,
    imagePaths:[],
    mainPosts:[{
        User:{
            id:1,
            nickname:'김대연',
        },
        content:'게시글입니다',
        img:'http://memop.ediya.com/assets/layouts/layout4/img/logo-light.png',
    }],
};

const UserProfile = () =>{
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br/>{dummy.Post.length}</div>,
                <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
                <div key="follower">팔로<br/>{dummy.Followers.length}</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
        </Card>
    )
}

export default UserProfile;