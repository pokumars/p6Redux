const notificationReducer = (state = 'render here notification...', action) => {
    switch (action.type) {
    case 'SET_NOTIFICATION':
        return action.notification
    case 'REMOVE_NOTIFICATION':
        return null
    default:
        return state
    }
}

export const createNotification = (message) => {
    console.log('from createNotification---> ', message)
    return {
        type: 'SET_NOTIFICATION',
        notification: message
    }
}

export const removeNotification = ()=> {
    return {
        type: 'REMOVE_NOTIFICATION',
        notification: null
    }
}

export const notifyAsync =(theMessage, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            notification: theMessage
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION',
            })
        }, time)
    }
  
}

export default notificationReducer