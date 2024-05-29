import { View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddTaskForm from "./AddTaskForm";
import SignInForm from "./SignInForm";
import { Route, Routes, Navigate } from 'react-router-native';

const Main = () => {
  return (
    <View>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/addTask" element={<AddTaskForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </View>    
  )
}

export default Main;