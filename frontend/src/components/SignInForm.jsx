import { View, TextInput, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from "../theme";

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required'),
  password: yup
    .string()
    .required('password is required')
    .min(4, 'password is at least 4 chars long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textInput: {
    fontSize: theme.fontSizes.taskInput,
    width: '80%',
    height: 35,
    alignContent: 'center',
    marginBottom: 5,
    padding: 5,
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: theme.borderColors.textInput
  },
  submitButtonText: {
    fontSize: theme.fontSizes.taskInput - 5,
    color: 'white',
    height: 30,
    width: Dimensions.get("window").width * 0.8,
    textAlign: 'center'
  },
  submitButtonContainer: {
    backgroundColor: theme.backgroundColors.submitButton,
    borderWidth: 1.2,
    borderRadius: 20,
  }
})

const SignInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => onSubmit(values)
  }); 

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        value={formik.values.username}
        style={styles.textInput}
        onChangeText={formik.handleChange('username')}
      />

      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red', marginLeft: 5, marginBottom: 5 }}>{formik.errors.username}</Text>
      )}

      <TextInput
        placeholder="password"
        value={formik.values.password}
        secureTextEntry={true}
        style={[styles.textInput]}
        onChangeText={formik.handleChange('password')}
      />

      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red', marginLeft: 5, marginBottom: 5 }}>{formik.errors.password}</Text>
      )}

      <TextInput
        placeholder="confirm password"
        value={formik.values.confirmPassword}
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={formik.handleChange('confirmPassword')}
      />

      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text style={{ color: 'red', marginLeft: 5, marginBottom: 5 }}>{formik.errors.confirmPassword}</Text>
      )}

      <Pressable onPress={formik.handleSubmit} style={styles.submitButtonContainer}>
        <Text style={styles.submitButtonText}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm;