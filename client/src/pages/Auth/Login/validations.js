import * as yup from "yup";

const validations = yup.object().shape({
	email: yup
		.string()
		.email("Enter a valid email.")
		.required("Email is required!"),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters.")
		.required(),
});

export default validations;

