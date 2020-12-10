import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default function blogs({ name, time, text, image, dp }) {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.container}>

                <View style={styles.details}>
                    <Image source={require('../../assets/flower4.png')} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.text}>texttexttexttextvuhrffgyggghhjyytggtextvvtexttexttexttexttexttexttexttextv</Text>
                        <View style={styles.profileDetails}>
                            <Image source={require('../../assets/flower4.png')} style={styles.secondImage} />
                            <Text style={styles.name}>name</Text>
                            <Text style={styles.time}>time</Text>
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
    },
    container: {
        // flex:1,
        height:150,
        marginTop: 10,
        flexDirection: "row",
    },

    details:{
flexDirection:"row",
    },
    profileDetails: {
        flexDirection: "row"
    },
    image: {
        height: 100,
        width: 100
    },
    text: {
        fontSize: 15,
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
        marginLeft: 10,
        marginTop: 15
    },
    time: {
        color: "#444952",
        marginTop: 3,
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 15
    },
})