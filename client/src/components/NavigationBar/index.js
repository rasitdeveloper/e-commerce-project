import React from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"

import { useAuth } from "../../contexts/AuthContext"
import { useCart } from "../../contexts/CartContext"

function NavigationBar() {

  const { loggedIn, user } = useAuth();
  const { items } = useCart();

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
                {
                  items.length > 0 && (
                    <Link to="/cart">
                      <Button colorScheme="pink" variant="outline">
                        Cart ({items.length})
                      </Button>
                    </Link>
                  )
                }
                {
                  user?.role === 'admin' && (
                    <Link to="/admin">
                      <Button colorScheme="red" variant="ghost">Admin</Button>
                    </Link>
                  )
                }
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