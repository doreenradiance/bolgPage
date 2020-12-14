import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function blogs({ name, time, text, image, dp, navigation,}) {

    // navigation.route.params;

    return (
        <TouchableOpacity
        style={styles.skip} onPress={() => {
            navigation.navigate('BlogsDetail',{name, time, text, image, dp,navigation})
          }}
         style={styles.mainContainer}>

            <View style={styles.container}>

                <View style={styles.details}>
                    <View style={styles.imageContainer}>
                        <Image source={image} style={styles.image} 
                          />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.text}>{text}</Text>
                        <View style={styles.profileDetails}>
                            <Image source={dp} style={styles.secondImage} />
                            <Text style={styles.name}>{name}</Text>
                            <View style={styles.indicator}></View>
                            <Text style={styles.time}>{time}</Text>
                        </View>
                    </View>

                </View>

            </View>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 5,
        justifyContent: "space-around"
    },
    container: {
        backgroundColor: "#e1e8e3",
        height: 150,
        marginTop: 15,
        flexDirection: "row",
    },

    details: {
        flexDirection: "row",
        flex: 1
    },
    profileDetails: {
        flexDirection: "row",
        marginTop: 20
    },
    imageContainer:{
        backgroundColor:"#db9e72" ,
        
    },
    image: {
        marginTop: 15,
        height: 120,
        width: 100,
    },

    infoContainer: {
        flex: 1
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,

    },

    secondImage: {
        height: 35,
        width: 35,
        borderRadius: 15,
        marginLeft: 10
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 8,
        marginTop: 10
    },
    indicator: {
        backgroundColor: "#444952",
        height: 5,
        width: 5,
        borderRadius: 2.5,
        marginTop: 20,
        marginLeft: 8
    },

    time: {
        color: "#444952",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 3,
        marginTop: 10,
    },
})