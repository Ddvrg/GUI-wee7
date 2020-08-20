import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default function App(){
  return(
    <View style={style.container}>
      <Text style={style.text}>
        Hello Wolrd
        </Text>
          <Image style={style.image}
              source={{uri:'https://catanimal99.com/wp-content/uploads/2019/07/%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99-%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B2%E0%B8%AA%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%B9%E0%B9%89-1024x550.jpg'}}
          />

          <Image style={style.image}
              source={{uri:'https://www.thairath.co.th/media/HCtHFA7ele6Q2dULjnz2JwCVK4qJVrU0gwxNnODOiCHKJkRUuHJnnXVLI2dP1T3y2J.jpg'}}
          />

          <Image style={style.image} 
              source={{uri:'https://i1.wp.com/dailyanimate.com/wp-content/uploads/2019/02/1550210533610293ebf86057b2414755b538e4e1baae2c90.jpg?w=1025&ssl=1'}}
          />
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'top',
    alignItems:'center',
    backgroundColor:'#ff8000',
  },
  text:{
    fontSize:20,
    color:'red',
    backgroundColor:'black',
    padding:20,
  },
  image:{
  width:150,
  height:150,
  }

})
//export default App;