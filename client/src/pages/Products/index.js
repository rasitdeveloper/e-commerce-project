import React from 'react'
import { Grid } from "@chakra-ui/react";
import Card from '../../components/Card'
import { useQuery } from 'react-query'
import { getAllProduct } from '../../api'

function Products() {

    const { isLoading, error, data } = useQuery('product', getAllProduct)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


  return (
    <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {
                data.map((item, key) => (
                    <Card key={key} item={item} />
                ))
            }

        </Grid>
    </div>
  )
}

export default Products