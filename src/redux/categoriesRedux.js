//selectors
export const getAllCategories = (state) => { return state.categories };

//actions
//creators

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        case "XX":
            return ( console.log(statePart))
        default:
            return statePart;
    }
}

export default categoriesReducer;