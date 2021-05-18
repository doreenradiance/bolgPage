import React from 'react'
import {ScrollView, StyleSheet, Text, View, Image, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, Entypo, SimpleLineIcons } from '@expo/vector-icons';



export default function BlogsDetail({ route, navigation }) {
    let blog = route.params;

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.heading}>
                <TouchableOpacity onPress={() =>{navigation.navigate("BlogsScreen") }}
                 >
                <AntDesign name="left" style={styles.left} size={30} />
                    </TouchableOpacity>

                    <Text style={styles.headingText}>Beauty</Text>
                   
                    
                    <View style={styles.icons}>
                     <Feather name="headphones" style={styles.headPhone} size={25} />
                     <Entypo name="heart-outlined" style={styles.heart} size={25} />
                     <SimpleLineIcons name="share" style={styles.share} size={25} color="black" />
                    </View>
                </View>

                <View >
                    <Image source={blog.image} style={styles.firstImage}/>
                </View>

                <Text style={styles.text1}>
                    Focus On Learning and Creating
                    Rather Than Entertainment and
                    Distraction
                </Text>
            
                <View style={styles.profile}>
                    <Image source={blog.dp} style={styles.secondImage} />
                    <View style={styles.profileText}>
                    <Text style={styles.name}> Jonhy Vino</Text>
                    <View style={styles.indicator}></View>
                    <Text style={styles.time}>4 min read</Text>
                    </View>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        marginTop:40,
        marginLeft:15,
    },

    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 20,
        justifyContent: "space-around",
    },

 heading:{
     flexDirection:"row",
     alignContent:"space-between"
 },

 headingText:{
     fontWeight:"bold",
     fontSize:25,
     marginRight:80
 },

 icons:{
     marginLeft:20,
     flexDirection:"row"
},

 left:{
marginTop:3
 },

 headPhone:{
     marginRight:20,
     marginTop:6
 },

heart:{
    marginRight:20,
    marginTop:6
},

share:{
    marginRight:20,
    marginTop:6
},

 firstImage:{
     alignSelf:"center",
    height:250,
    width:250,
    marginTop:25
 },

 secondImage:{
     height:30,
     width:30,
     borderRadius:20,
 },

    indicator:{
        marginVertical:10,
        marginLeft:15,
        marginRight:5,
        backgroundColor:"#444952",
        height:5,
        width:5,
        borderRadius:2.5
 },
 name:{
     fontWeight:"700",
     fontSize:16,
     marginTop:1,
     marginLeft:5
 },
 time:{
     color:"#444952",
     marginTop:3
 },

 text1:{
     flex:1,
     fontSize:19,
     fontWeight:"bold",
     marginLeft:15,
     marginTop:10
},

 profile:{
     flexDirection:"row",
     marginLeft:15,
     marginTop:15
 },

 profileText:{
     flexDirection:"row",
     marginTop:5
 },
text:{
    fontSize:15,
    marginTop:15,
    marginLeft:10,
    marginRight:10
},

 
})
