//selectors
export const getAllCards = (state) => {
    return state.posts
};
export const findPost = ({posts}, postId) => posts.find(post => post.id === postId);
//actions
function createActionName(actionName) {
    return `app/posts/${actionName}`;
}

//action creators

const postsReducer = ( statePart = [], action ) => {
    switch (action.type) {
        default:
            return statePart;
        };
};

export default postsReducer;