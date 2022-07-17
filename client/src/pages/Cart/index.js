import React from 'react'
import { Alert, Button, Image, Box, Text } from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom"

function Cart() {

  const { items, removeFromCart } = useCart();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <Box p={6}>
      {items.length < 1 && (<Alert status='warning'>Your ReadyTrade Cart is empty.</Alert> )}
      {
        items.length > 0 && <>
          <ul style={{listStyleType: "decimal" }}>
            {
              items.map((item) => (
                <li key={item._id}>
                  <Link to={`/product/${item._id}`}>
                    <Text fontSize="22">{item.title} - ${item.price}</Text>
                    <Image htmlWidth={200} loading="lazy" src={item.photos[0]} alt="cart-item" />
                  </Link>
                  <Box my={3}></Box>
                  <Button mt="2" size="sm" colorScheme="red" onClick={() => removeFromCart(item._id)}>Remove From Cart</Button>
                  <Box my={9}></Box>
                </li>
              ))
            }
          </ul>
          <Box mt="12">
            <Text fontSize="22">Total: {total}</Text>
          </Box>
        </>
      }

      
    </Box>
    
  
  )
}

export default Cart