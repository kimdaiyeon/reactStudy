import React from 'react';
import {Input, Form, Button, Avatar, Icon, Card} from "antd";

const dummy ={
    isLoggedIn:true,
    imagePaths:[],
    mainPosts:[{
        User:{
            id:1,
            nickname:'김대연',
            content:'게시글입니다',
        }
    }],
};
const Home = ()=>{
    return(
        <div>
            {dummy.isLoggedIn && <Form enType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder="어떤신기한 일이 있었나요?" />
                <div>
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{float:'right'}} htmlType="submit">짹</Button>
                </div>
                <div>
                    {dummy.imagePaths.map((v, i)=>{
                        return (
                            <div key={v} style={{display:'inline-block'}}>
                                <img src={'http://localhost:3000/'+ v} style={{width:'200px'}} alt={v} />
                                <div>
                                    <Button>제</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Form>
            }
            {dummy.mainPosts.map((c)=>{
                return(
                    <Card
                        Key={c.createdAt}
                        cover={c.img && <img alt="example" src={c.img}/>}
                        actions={[
                            <Icon type="retweet" key="retweet"/>,
                            <Icon type="heart" key="heart"/>,
                            <Icon type="message" key="message"/>,
                            <Icon type="ellipsis" key="ellipsis"/>,
                        ]}
                        extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta
                            avatar={<Avatar>c.User.nickname[0]</Avatar>}
                            title={c.User.nickname}
                            description={c.content}
                        />
                    </Card>
                );
            })}
        </div>
    );
};

export default Home;