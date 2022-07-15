import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react"
import validationSchema from './validations'
const { useFormik } = require("formik");
const { toRegister } = require("../../../api")
const { useAuth } = require("../../../contexts/AuthContext")

function Register() {

  const { login } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try{
        const registerResponse = await toRegister({email:values.email,password:values.password});
        console.log(registerResponse)
        login(registerResponse)
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  })


  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={12}>
          <Box>
            <Heading>Register</Heading>
          </Box>
          <Box my={6}>
						{formik.errors.general && (
							<Alert status="error">{formik.errors.general}</Alert>
						)}
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
                isInvalid={formik.touched.email && formik.errors.email}
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
                isInvalid={formik.touched.password && formik.errors.password}
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
                isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
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