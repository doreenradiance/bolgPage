import React from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'


export default function blogs({ name, time, text, image }) {
    return (
        <View>
            <View style={styles.container}>

                <View style={styles.details}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Image source={image}/>
                        <Text style={styles.text}>{text}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10
    },
})