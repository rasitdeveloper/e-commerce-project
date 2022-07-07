import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
const { useFormik } = require("formik");
const validationSchema = require("./valitadions");

function Register() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values)
    },
  })


  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={12}>
          <Box>
            <Heading>Register</Heading>
          </Box>
          <Box my={6} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input 
                name='email' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input 
                name='password' 
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password Confirm</FormLabel>
                <Input 
                name='passwordConfirm' 
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirm}
                />
              </FormControl>
              <Button mt={12} width="full" type='submit'>
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Register