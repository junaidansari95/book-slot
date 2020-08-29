const initialState = { isAddSlotRequestLoading: false };
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
        case 'ADD_NEW_SLOT_REQUEST':
            return {
                ...state, isAddSlotRequestLoading: true
            }
        case "GET_ALL_SLOTS_REQUEST":
            return {
                ...state, isGetAllSlotsRequestLoading: true
            }
        case "GET_ALL_SLOTS_SUCCESS":
            return {
                ...state, isGetAllSlotsRequestLoading: false, all_slots: action.payload
            }
        case "GET_ALL_SLOTS_FAILURE":
            return {
                ...state, isGetAllSlotsRequestLoading: false
            }
        case 'ADD_NEW_SLOT_SUCCESS':
            return {
                ...state, isAddSlotRequestLoading: false, added_user: action.payload
            }
        case 'ADD_NEW_SLOT_FAILURE':
            return {
                ...state, isAddSlotRequestLoading: false
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