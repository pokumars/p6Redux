const notificationReducer = (state = 'render here notification...', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'REMOVE_NOTIFICATION':
      return null;
  
    default:
      return state
  }
}

export const createNotification = (message) => {
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
export const notifyShort =(theMessage) => {
  createNotification(theMessage)
  setTimeout(() => {
    removeNotification()
  }, 2500)
}

export const notify =(fxn, theMessage) => {
  createNotification(theMessage)
  setTimeout(() => {
    removeNotification()
  }, 5000)
}


export default notificationReducer;