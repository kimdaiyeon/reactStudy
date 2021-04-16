export const initialState = {
    mainPosts:[{
        User:{
            id:1,
            nickname:'김대연',
        },
        content:'게시글입니다',
        img:'http://memop.ediya.com/assets/layouts/layout4/img/logo-light.png',
    }],
    imagePaths:[],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data:{
        content: 'Hello',
        UserId: 1,
        User: {
            nickname:'디와이',
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            return {
                ...state,
            };
        }

        case ADD_DUMMY:{
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            };
        }

        default:{
            return {
                ...state,
            }
        }
    }
};

export default reducer;