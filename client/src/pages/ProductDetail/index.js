import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../api"
import { Box, Text, Button} from "@chakra-ui/react"
import ImageGallery from 'react-image-gallery'

function ProductDetail() {

  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () => 
    getSingleProduct(product_id)
  );

  if(isLoading) {
    return <div>Loading..</div>
  }

  if(isError) {
    return <div>Error!</div>
  }

  console.log(data)

  const images = data.photos.map((url) => ({ original: url}))

  return (
    <div>
      <Button colorScheme="orange">Add to Cart</Button>
      <Text as="h3" fontSize="3xl">
        {data.title}
      </Text>
      <p>{data.description}</p>
      <Box mt="50" ml="400" w={1000} h={600}>
        <ImageGallery items={images}/>
      </Box>
    </div>
  )
}

export default ProductDetail