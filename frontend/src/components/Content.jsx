import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from 'react';
import Task from "./Task";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 200
  }
})

const Content = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('http://192.168.0.104:3001/api/tasks')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task task={item} />}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
      />
    </View>
  )
}

export default Content;