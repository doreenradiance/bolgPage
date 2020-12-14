import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import BlogsDetail from './src/screens/BlogsDetail';
import BlogsScreen from './src/screens/BlogsScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        // title:"Blog Details",
        headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
      }}
      >

      <Stack.Screen 
      options={{
        header:() =>null
      }}
          name='BlogsScreen'
           component={BlogsScreen} />

        <Stack.Screen 
        options={{
          header:() =>null
        }}
        name='BlogsDetail' component={BlogsDetail} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}
  //   <View style={styles.container}>
  //     <BlogsScreen/>
  //     {/* <SingleBlog/> */}
  //     {/* <BlogsDetail/> */}
  //   </View>
  // )


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
// });
