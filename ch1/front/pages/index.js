import React, {useEffect} from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {loginAction, logoutAction} from "../reducers/user";

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
    const dispatch = useDispatch();
    const {isLoggedIn, user} = useSelector(state => state.user);

    useEffect(()=>{
        dispatch(loginAction);
        dispatch(logoutAction);
        dispatch(loginAction);
    },[]);

    return(
        <div>
            {user ? <div>로그인했습니다: {user.nickname}님</div> : <div>로그아웃 했습니다.</div>}
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