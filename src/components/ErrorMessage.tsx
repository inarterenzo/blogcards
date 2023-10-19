import React from 'react'

interface IErrorMessage {
  message: string
}


const ErrorMessage = ({message}: IErrorMessage) => {
  return (
    <div style={{width:"100vw"}}>
      <p style={{textAlign:"center",margin:"auto"}}>
        {message}
      </p>
    </div>
  )
}

export default ErrorMessage
