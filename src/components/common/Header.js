import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import Button from './ui/Button'
import { reqLogin, reqLogout } from '../../redux/modules/authentication'

const useStyles = createUseStyles({    
  header: {    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }         
})

export default function Header() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { authenticated } = useSelector(state => state.Authentication)

  const handleLogin = () => dispatch(reqLogin())
  const handleLogout = () => dispatch(reqLogout())

  const authButton = !authenticated
    ? <Button onClick={handleLogin}>Login</Button>
    : <Button onClick={handleLogout}>Logout</Button>

  return (
    <div className={classes.header}>
      Header
      { authButton }
    </div>
  )
}