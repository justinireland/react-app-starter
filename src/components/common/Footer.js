import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({    
  footer: {    
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '100%'
  }         
})

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      Footer       
    </div>
  )
}