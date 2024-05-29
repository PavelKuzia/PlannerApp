import Constants from 'expo-constants';
import {Text, View, StyleSheet} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    marginBottom: 20
  },
  text: {
    color: theme.colors.header,
    fontSize: theme.fontSizes.headerSize
  }
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Planner App</Text>
    </View>
  )
}

export default Header;