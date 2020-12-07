import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlogsScreen from './src/screens/BlogsScreen';
import SingleBlog  from './src/components/SingleBlog';
import  BlogsDetail from './src/screens/BlogsDetail';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <BlogsScreen/> */}
      {/* <SingleBlog/> */}
      <BlogsDetail/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
