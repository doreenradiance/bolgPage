import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SingleBlog from '../components/SingleBlog';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const BlogsScreen = () => {
    blogs = [
        {
            image: require('../../assets/flower.png'),
            text: "Does Dry is January Actually Improve Your Health?",
            dp: require('../../assets/DP.jpg'),
            name: "Subash Chand",
            time: "4 min read"
        },
        {
            image: require('../../assets/flower1.png'),
            text: "How to Seem Like You Always Have Your Shot Together",
            dp: require('../../assets/DP.jpg'),
            name: "Jonhy Vino",
            time: "4 min read"
        },
        {
            image: require('../../assets/flower2.png'),
            text: "Does Dry in January Actually Improve Your Health?",
            dp: require('../../assets/DP.jpg'),
            name: "Masudur Rah",
            time: "4 min read"
        },
        {
            image: require('../../assets/flower3.png'),
            text: "You do hire a designer to make something.You hire them.",
            dp: require('../../assets/DP.jpg'),
            name: "Subash Chand",
            time: "4 min read"
        },

    ]

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <View><Fontisto name="nav-icon-grid-a" style={styles.gridIcon} size={25}/></View>
                <Text style={styles.headingText}>Discover</Text>
                <View><Octicons name="search" style={styles.search} size={25} /></View>
            </View>

            <FlatList
                data={blogs}
                renderItem={({ item }) => {
                    return <SingleBlog name={item.name} time={item.time} text={item.text} image={item.image} dp={item.dp} />
                }}
                keyExtractor={(item) => item.number}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        marginTop: 30,
        marginVertical:10,
    },
    heading: {
        flexDirection: "row",
        marginLeft:10,
    },
    headingText:{
        fontSize:25,
        fontWeight:"bold",
        marginHorizontal:90,
        marginBottom:10
    },
    gridIcon:{
        marginTop:5,
        marginLeft:5
    },
    search:{
        marginTop:5
    }
})


export default BlogsScreen;