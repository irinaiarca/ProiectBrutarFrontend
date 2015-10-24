export default (state, action) => {
    console.log("Set User Reducer");
    return true && { ...state, user: action.user };
}