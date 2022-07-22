import React from 'react'
import { useParams } from "react-router-dom"
import { getSingleProduct, updateProduct } from '../../../api'
import { useQuery } from 'react-query'
import { Formik, FieldArray } from 'formik'
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { message } from "antd";
import validationSchema from "./validations";


function ProductDetail() {

  const {product_id} = useParams();

  const { isLoading, isError, data, error } = useQuery(['admin:product', product_id], () => getSingleProduct(product_id));

  if(isLoading)
    return <div>Loading...</div>
  
  if(isError)
    return <div>Error {error.message}</div>

  const handleSubmit = async (values, bag) => {
		console.log("submitted");
		message.loading({ content: "Loading...", key: "product_update" });

		try {
			await updateProduct(values, product_id);

			message.success({
				content: "The product successfully updated",
				key: "product_update",
				duration: 2,
			});
		} catch (e) {
			message.error("The product does not updated.");
		}
	};

  return (
    <div>
      <Text fontSize='22'>Edit</Text>
      <Formik 
      initialValues={{
        title: data.title,
        description: data.description,
        price: data.price,
        photos: data.photos
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {
          ({handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting}) => (
            <>
              <Box>
                <Box my={12} textAlign='left'>
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input 
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        disabled={isSubmitting}
                        isInvalid={touched.title && errors.title}
                      />
                      {touched.title && errors.title && (
											  <Text color="tomato">{errors.title}</Text>
										  )}
                    </FormControl>
                    <FormControl mt={12}>
                      <FormLabel>Description</FormLabel>
                      <Textarea 
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        disabled={isSubmitting}
                        isInvalid={touched.description && errors.description}
                      />
                      {touched.description && errors.description && (
											  <Text color="tomato">{errors.description}</Text>
										  )}
                    </FormControl>
                    <FormControl mt={12}>
                      <FormLabel>Price</FormLabel>
                      <Input 
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        disabled={isSubmitting}
                        isInvalid={touched.price && errors.price}
                      />
                      {touched.price && errors.price && (
											  <Text color="tomato">{errors.price}</Text>
										  )}
                    </FormControl>
                    <FormControl mt={12}>
                      <FormLabel>Photos</FormLabel>
                      <FieldArray 
                        name="photos"
                        render={(arrayHelpers) => (
                          <div>
                            {
                              values.photos && values.photos.map((photo, index) => (
                                <div key={index}>
                                  <Input 
                                    name={`photos.${index}`}
                                    value={photo}
                                    disabled={isSubmitting}
                                    onChange={handleChange}
                                    width="6xl"
                                  />
                                  <Button ml={6} type="button" colorScheme="red" onClick={() => arrayHelpers.remove(index)}>Remove</Button>

                                </div>
                              ))
                            }
                            <Button mt={6} onClick={() => arrayHelpers.push('')}>Add a Photo</Button>
                          </div>
                        )}
                      />
                    </FormControl>
                    <Button
										  mt={4}
										  width="full"
										  type="submit"
										  isLoading={isSubmitting}
									  >
										  Update
									  </Button>
                  </form>
                </Box>
              </Box>
            </>
          )

        }
      </Formik>
    </div>
  )
}

export default ProductDetail