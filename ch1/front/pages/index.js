import React from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

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
const Home = ()=>{
    return(
        <div>
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c}/>
                );
            })}
        </div>
    );
};

export default Home;