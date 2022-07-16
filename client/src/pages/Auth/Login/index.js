import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react"
import validationSchema from './validations'
import { useNavigate } from "react-router-dom"

const { useFormik } = require("formik");
const { toLogin } = require("../../../api")
const { useAuth } = require("../../../contexts/AuthContext")

function Login() {
  let navigate = useNavigate();
  const { login } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try{
        const loginResponse = await toLogin({email:values.email,password:values.password});
        console.log(loginResponse)
        login(loginResponse)
        navigate('/profile')
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
            <Heading>Login</Heading>
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
              <Button mt={12} width="full" type='submit'>
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Login