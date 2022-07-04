import React from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"

function NavigationBar() {
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
          <Link to="/register">
            <Button colorScheme="cyan">Register</Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="green">Login</Button>
          </Link>
          
        </div>
    </nav>
  )
}

export default NavigationBar