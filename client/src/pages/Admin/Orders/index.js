import React from 'react'
import { useQuery } from "react-query";
import { getOrders } from "../../../api";
import { Table,Thead,Tbody,Tr,Th,Td,TableCaption,Text } from "@chakra-ui/react";


function Orders() {

  const {isLoading, isError, data, error } = useQuery("admin:orders", getOrders)

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>Error {error.message}</div>
  }

  console.log(data)

  return (
    <div>
      {/* https://chakra-ui.com/docs/components/table */}
      <Text fontSize={25} p={12}>Orders</Text>  
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            data.map((item) => (
              <Tr key={item._id}>
                <Td>{item.user.email}</Td>
                <Td>{item.address}</Td>
                <Td isNumeric>{item.items.length}</Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </div>
  )
}

export default Orders