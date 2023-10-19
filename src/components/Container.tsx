import React from 'react'

interface Props {
     children?: React.ReactNode | React.ReactNode[] 
    }

const Container = ({children}:Props) => {
    

  return (
    <div style={{margin: "2vh 6vw"}}>
        {children && Array.isArray(children) && children.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
        {   children && !Array.isArray(children) &&
         <div>{children}</div>
        }
    </div>
  )
}

export default Container
