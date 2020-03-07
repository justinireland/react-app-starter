import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({    
  button: {    
    padding: 10
  }         
})

export default function Button(props) {
  const { children, className='', ...restProps } = props
  const classes = useStyles()

  return (
    <button className={`${classes.button} ${className}`} {...restProps}>
      {children}
    </button>
  )
}