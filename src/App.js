import React from 'react'
import { createUseStyles } from 'react-jss'
import { Switch, Route } from "react-router-dom"
import Home from './components/views/home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const useStyles = createUseStyles({    
  app: {    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 500,
    minWidth: 300,    
    margin: 'auto',
    height: '100%'
  }         
})

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Header />      
      <Switch>        
        <Route exact path="/" component={Home} />                           
        <Route exact path="*" component={Home} />
      </Switch>    
      <Footer />        
    </div>
  )
}
