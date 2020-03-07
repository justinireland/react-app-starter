import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({    
  home: {    
    display: 'flex',
    flexDirection: 'column'
  }         
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.home}>
      Home       
    </div>
  )
}