import { React, useRef, useState } from 'react'
import { Alert, Button, Image, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom"
import { postOrder } from '../../api';
import { useAuth } from "../../contexts/AuthContext";

function Cart() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const [ address, setAddress] = useState('')
  const { items, removeFromCart, makeEmptyCart } = useCart();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  const { user } = useAuth();

  const handleSubmitForm = async () => {
    const itemsId = items.map((item) => item._id)
    const input = {
      user: user._id,
      address,
      items: JSON.stringify(itemsId)
    }
    await postOrder(input);
    makeEmptyCart()
    onClose() // close modal
  }

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

          <Button mt={3} size="sm" colorScheme="green" onClick={onOpen}>Order</Button>

          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea ref={initialRef} placeholder='Adress Area' value={address} onChange={(e) => setAddress(e.target.value)} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      }

      
    </Box>
    
  
  )
}

export default Cart