import {View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigate } from "react-router-dom";
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 70,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    height: 100,
    backgroundColor: theme.backgroundColors.footer,
    position: 'absolute', 
    width: Dimensions.get('window').width,
    top: Dimensions.get('window').height - 100
  },
  logo: {
    width: 55,
    height: 55
  }
});

const Footer = () => {
  const navigate = useNavigate();

  const onCallToAdd = () => {
    navigate("/addTask");
  }

  const onCallToList = () => {
    navigate("/");
  }

  const onCallToLogin = () => {
    navigate("/signin");
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onCallToAdd}>
        <Image 
          source={require('../assets/images/add-logo.png')}
          style={styles.logo}
        />
      </Pressable>
      <Pressable onPress={onCallToList}>    
        <Image 
          source={require('../assets/images/list-logo.png')}
          style={styles.logo}
        />
      </Pressable>
      <Pressable onPress={onCallToLogin}> 
        <Image 
          source={require('../assets/images/login-logo.png')}
          style={styles.logo}
        />
      </Pressable> 
    </View>
  )
}

export default Footer;