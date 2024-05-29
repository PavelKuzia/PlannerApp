import { View, Text, StyleSheet } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#e4e8ed',
    borderRadius: 10,
    padding: 5
  },
  textHeader: {
    fontSize: theme.fontSizes.taskHeader,
    fontWeight: 'bold',
    paddingBottom: 2
  },
  textDescription: {
    fontSize: theme.fontSizes.taskDescription,
    fontStyle: 'italic',
    paddingBottom: 4
  },
  dateText: {
    fontWeight: 600
  },
  dateContainer: {
    flexDirection: 'row'
  }
})

const Task = ({task}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{task.name}</Text>
      {task.description && <Text style={styles.textDescription}>{task.description}</Text>}
      <View style={styles.dateContainer}>
        <Text style={[{marginRight: 15}, styles.dateText]}>Created: {task.creationDate}</Text>
        <Text style={{fontWeight: 600}}>Due Date: {task.dueDate}</Text>
      </View>
    </View>
  )
}

export default Task;