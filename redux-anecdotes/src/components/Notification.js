import React from 'react'

const Notification = (props) => {
  const { store } = props
  const { notification, anecdotes} = store.getState()

  if (notification === null){
    return null;
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: '#cceeff'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification