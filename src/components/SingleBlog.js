import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default function blogs({ name, time, text, image, dp }) {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>

                <View style={styles.details}>
                    <Image source={image} style={styles.image} />
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

        </View >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 5,
        justifyContent:"space-around"
    },
    container: {
        // flex:1,
        backgroundColor:"#e1e8e3",
        height:150,
        marginTop: 15,
        flexDirection: "row",
    },

    details:{
flexDirection:"row",
    },
    profileDetails: {
        flexDirection: "row",
        marginTop:20
    },
    image: {
        marginTop:15,
        height: 130,
        width: 100,
       
    },

    infoContainer:{
        // flex:1
    },

    text: {
        // flex:1,
        fontSize: 20,
        fontWeight: "bold",
        marginTop:10,
        marginLeft:10,
        
    },

    secondImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft:10
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 8,
        marginTop: 12
    },
    indicator:{
    backgroundColor:"#444952",
    height:5,
    width:5,
    borderRadius:2.5,
    marginTop:23,
    marginLeft:8
},

    time: {
        color: "#444952",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 3,
        marginTop: 13,
    },
})