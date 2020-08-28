const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_REQUEST':
            return {
                ...state, isGetUsersRequestLoading: true
            }
        case 'GET_ALL_USERS_SUCCESS':
            return {
                ...state, isGetUsersRequestLoading: false, all_users: action.payload
            }
        case 'GET_ALL_USERS_FAILURE':
            return {
                ...state, isGetUsersRequestLoading: false
            }
        case 'ADD_USER_REQUEST':
            return {
                ...state, isAddUserRequestLoading: true
            }
        case 'ADD_USER_SUCCESS':
            return {
                ...state, isAddUserRequestLoading: false, added_user: action.payload
            }
        case 'ADD_USER_FAILURE':
            return {
                ...state, isAddUserRequestLoading: false
            }
        case 'DELETE_USER_REQUEST':
            return {
                ...state, isDeleteUserRequestLoading: true
            }
        case 'DELETE_USER_SUCCESS':
            return {
                ...state, isDeleteUserRequestLoading: false, user_deleted: action.payload
            }
        case 'DELETE_USER_FAILURE':
            return {
                ...state, isDeleteUserRequestLoading: false
            }
        case 'UPDATE_USER_REQUEST':
            return {
                ...state, isUpdateUserRequestLoading: true
            }
        case 'UPDATE_USER_SUCCESS':
            return {
                ...state, isUpdateUserRequestLoading: false, user_updated: action.payload
            }
        case 'UPDATE_USER_FAILURE':
            return {
                ...state, isUpdateUserRequestLoading: false
            }
        default:
            return state;
    }
}