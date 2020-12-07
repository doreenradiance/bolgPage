import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign, Feather, Entypo, SimpleLineIcons } from '@expo/vector-icons';



export default function BlogsDetail() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cotainer}>
                <View style={styles.heading}>
                    <AntDesign name="left" style={styles.left} size={30} />
                    <Text style={styles.headingText}>Beauty</Text>
                    <Feather name="headphones" style={styles.headPhone} size={20} />
                    <Entypo name="heart-outlined" style={styles.heart} size={20} />
                    <SimpleLineIcons name="share" style={styles.share} size={20} color="black" />
                </View>

                <View style={styles.firstImage}>
                    <Image source={require('../../assets/flower1.jpg') }/>
                </View>

                <Text style={styles.boldText}>
                    Focus On Learning and Creating
                Rather Than Entertainment
                and Distraction
                 </Text>

                <View style={styles.profile}>
                    <Image source={require('../../assets/DP.jpg')} style={styles.secondImage} />
                    <Text> Jonhy Vino
                    . 4 min read</Text>
                </View>

                <Text style={styles.text}>Contrary to popular belief,
                Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur,
                from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics,
                very popular during the Renaissance.
    
                   </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        marginTop:80,
        marginLeft:15,
        // justifyContent: "space-around",
    },
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 20,
        // marginVertical:20,
        justifyContent: "space-around",
    },

 heading:{
     flexDirection:"row",
     alignContent:"space-between"

 },
 headingText:{
     fontWeight:"bold",
     fontSize:25,
     marginRight:80,
    
 },
 left:{
// marginTop:3
 },
 headPhone:{
     marginRight:20,
     marginTop:5
 },
heart:{
    marginRight:20,
    marginTop:5
},
share:{
    marginRight:20,
    marginTop:5
},
 firstImage:{
    height:10,
    width:10
 },
 secondImage:{
     height:30,
     width:30,
     borderRadius:15
 },
 boldText:{
     fontWeight:"bold",
     fontSize:15
 },
 profile:{
     flexDirection:"row",
 },
text:{
    fontSize:18
}
})
