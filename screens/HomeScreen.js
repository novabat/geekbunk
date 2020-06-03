import React,{useState,useEffect} from 'react';
import { Dimensions,StyleSheet,FlatList, Text, View,Button,Alert } from 'react-native';
import axios from 'axios'

const screenWidth = Math.round(Dimensions.get('window').width);
function Item({ item,editFormNav,del }) {
    return (
      <View style={styles.item}>
        <View style={styles.datacontainer}>
        <View>
        <Text style={styles.title1}>First Name</Text>
        <Text style={styles.title}>Last Name</Text>
        <Text style={styles.title}>Email Id</Text>
        </View>
        <View>
        <Text style={styles.data1}>{item.first_name}</Text>
        <Text style={styles.data}>{item.last_name}</Text>
        <Text style={styles.data}>{item.email}</Text>
        </View>
        </View>
        <View style={styles.buttonsview}>
      <Button onPress={()=>editFormNav(item.id)} title="Edit"/>
      <Button onPress={()=>del(item.id)}title="Delete"/>
    </View>
      </View>
    );
  }

const HomeScreen=({ navigation })=>{
  const [listData,setListData]=useState([])
  useEffect(()=>{
    const listener = navigation.addListener('didFocus',() => {
      axios.get('https://reqres.in/api/users?page=2').then
      ((response=>{setListData(response.data.data)}))
          
    })
    return function cleanup(){
      listener.remove();
    }
  },[])
  const deleteItem=async (id)=>{
    await axios.delete('https://reqres.in/api/users/'+id).then((response)=>Alert.alert(JSON.stringify(response.status)))
    var temp=listData.filter((item)=>{return item["id"]!=id})
    setListData(temp)
  }
  const editFormNavigation=(id)=>{
    var editData=listData.filter((item)=>{return item["id"]==id})
    navigation.navigate('EditForm',{data:editData})
  }

    return <View
    style={styles.container}>
        <FlatList
        data={listData}
        keyExtractor={value=>value.id.toString()}
        renderItem={({item}) => <Item item={item} editFormNav={(id)=>{editFormNavigation(id)}} del={(id)=>{deleteItem(id)}}/>}
      />
    </View>
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    buttonsview:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:10,
      marginTop:10

    },
    item:{
      flex:1,
      borderRadius:5,
      height:180,
      marginHorizontal:5,
      marginVertical:5,
      elevation:2
    },
    datacontainer:
    {display:'flex',
    flexDirection:'row'},
    data:{
      width:(screenWidth)/2-10,
      left:5,
      fontSize:18,
    },
    title:{
      fontSize:18,
      left:5,
      width:screenWidth/2-10

    },
    data1:{
      marginTop:10,
      width:(screenWidth)/2-10,
      left:5,
      fontSize:18,
    },
    title1:{
      marginTop:10,
      fontSize:18,
      left:5,
      width:screenWidth/2-10

    },
    add:{
      right:10
    }

    

})

export default HomeScreen