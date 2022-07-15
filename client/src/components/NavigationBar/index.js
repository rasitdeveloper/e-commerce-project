import React from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"

import { useAuth } from "../../contexts/AuthContext"

function NavigationBar() {

  const { loggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/">ReadyTrade</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {
            !loggedIn && (
              <>
                <Link to="/register">
                  <Button colorScheme="cyan">Register</Button>
                </Link>
                <Link to="/login">
                  <Button colorScheme="green">Login</Button>
                </Link>
              </>
            )
          }

          {
            loggedIn && (
              <>
                <Link to="/profile">
                  <Button colorScheme="blue">Profile</Button>
                </Link>
              </>
            )
          }
          
        </div>
    </nav>
  )
}

export default NavigationBar