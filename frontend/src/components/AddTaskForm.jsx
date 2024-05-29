import { View, TextInput, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from "../theme";

const initialValues = {
  taskName: '',
  taskDescription: '',
  dueDate: ''
}

const validationSchema = yup.object().shape({
  taskName: yup
    .string()
    .required('task name is required'),
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

const AddTaskForm = () => {
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
        placeholder="task"
        value={formik.values.taskName}
        style={styles.textInput}
        onChangeText={formik.handleChange('taskName')}
      />
      {formik.touched.taskName && formik.errors.taskName && (
        <Text style={{ color: 'red', marginLeft: 5, marginBottom: 5 }}>{formik.errors.taskName}</Text>
      )}

      <TextInput
        placeholder="task description"
        value={formik.values.taskDescription}
        style={[styles.textInput, {height: 100}]}
        onChangeText={formik.handleChange('taskDescription')}
      />
      <TextInput
        placeholder="due date"
        value={formik.values.dueDate}
        style={styles.textInput}
        onChangeText={formik.handleChange('dueDate')}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.submitButtonContainer}>
        <Text style={styles.submitButtonText}>Create a task</Text>
      </Pressable>
    </View>
  )
}

export default AddTaskForm;