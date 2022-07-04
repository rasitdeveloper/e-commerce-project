import React from 'react'
import { Grid } from "@chakra-ui/react";
import Card from '../../components/Card'
import { useQuery } from 'react-query'


function Products() {

    const { isLoading, error, data } = useQuery('product', () =>
    fetch('http://localhost:4000/product/get-all-product').then(res =>
      res.json()
    )
    )

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