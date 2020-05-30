import React from 'react';
import { Dimensions,StyleSheet,FlatList, Text, View } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const data=[{title:'A'},{title:'B'},{title:'C'},{title:'D'},{title:'E'},{title:'F'},{title:'G'},{title:'H'},
{title:'I'},{title:'J'},{title:'K'},{title:'L'}]
function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
const HomeScreen=()=>{
    return <View
    style={styles.container}>
        <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={item=>item.title}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
}

const styles=StyleSheet.create({
    container:{
        marginTop:20
    },
    item:{
        width:(screenWidth/2)-10,
        height:230,
        backgroundColor:'#4e243e',
        margin:2.5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize:18,
        textAlign:'center',
        color:'#fff'
    }
    

})

export default HomeScreen