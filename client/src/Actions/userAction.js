import axios from 'axios';
export const getPeople = () => dispatch => {
  dispatch({ type: 'GET_ALL_USERS_REQUEST' })
  axios.get('https://reqres.in/api/users')
    .then(result => {
      dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: result.data.data })
    })
    .catch(err => {
      dispatch({ type: 'GET_ALL_USERS_FAILURE', payload: err.response })
    });
};

export const getSlots = () => dispatch => {
  dispatch({ type: 'GET_ALL_SLOTS_REQUEST' })
  axios.get('/api/v1/users/')
    .then(result => {
      dispatch({ type: 'GET_ALL_SLOTS_SUCCESS', payload: result.data.data })
    })
    .catch(err => {
      dispatch({ type: 'GET_ALL_SLOTS_FAILURE', payload: err.response })
    });
};
export const addSlot = (data) => dispatch => {
  dispatch({ type: 'ADD_NEW_SLOT_REQUEST' })
  try {
    axios.post('/api/v1/users/', data)
    .then(result => {
      dispatch({ type: 'ADD_NEW_SLOT_SUCCESS', payload: result.data.data })
    })
  } catch (error) {
    dispatch({ type: 'ADD_NEW_SLOT_FAILURE', payload: error })
  }

};
export const deleteSlot = (id) => dispatch => {
  dispatch({ type: 'ADD_NEW_USER_REQUEST' })
  axios.delete(`/api/v1/users/${id}`)
    .then(result => {
      dispatch({ type: 'ADD_NEW_USER_SUCCESS', payload: result.data.data })

    })
    .catch(err => {
      dispatch({ type: 'ADD_NEW_USER_FAILURE', payload: err.response })
    });
};
export const updateSlot = (data) => dispatch => {
  dispatch({ type: 'UPDATE_USER_REQUEST', payload: data })
  axios.delete(`/api/v1/users?id=${data.id}`, data)
    .then(result => {
      dispatch({ type: 'UPDATE_USER_SUCCESS', payload: result.data.data })

    })
    .catch(err => {
      dispatch({ type: 'UPDATE_USER_FAILURE', payload: err.response })
    });
};