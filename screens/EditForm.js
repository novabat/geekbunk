import React from 'react';
import {StyleSheet, TextInput,Text,Button,Alert, View } from 'react-native';
import {Formik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const validationSchema={
    first_name:yup
    .string()
    .required("Required"),
    last_name:yup
    .string()
    .required("Required"),
    email: yup
      .string()
      .email("Enter valid Email")
      .required("Required"),
  }

const EditFormScreen = ({navigation,route}) =>{
    const data=navigation.state.params.data[0]
    return (    
        <Formik initialValues={{ first_name: data.first_name, last_name: data.last_name,email:data.email,}}
        onSubmit={async values => {
          await axios.put("https://reqres.in/api/users/"+data.id,values).then((response)=>Alert.alert(JSON.stringify(response.status)))
        navigation.navigate('Home')}}
        validationSchema={
            yup.object().shape(validationSchema)} >
  
  {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
    
    <View style={styles.background}>
      <TextInput
      style={styles.input}
        value={values.first_name}
        onChangeText={handleChange('first_name')}
        onBlur={() => setFieldTouched('first_name')}
        placeholder="First Name"
      />
      {touched.first_name && errors.first_name &&
        <Text style={styles.error}>{errors.first_name}</Text>
      } 
      <TextInput
      style={styles.input}
        value={values.last_name}
        onChangeText={handleChange('last_name')}
        onBlur={() => setFieldTouched('last_name')}
        placeholder="Last Name"
      />
      {touched.last_name && errors.last_name &&
        <Text style={styles.error}>{errors.last_name}</Text>
      }
      <TextInput
      style={styles.input}
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={() => setFieldTouched('email')}
        placeholder="E-mail"
      />
      {touched.email && errors.email &&
        <Text style={styles.error}>{errors.email}</Text>
      }
      <Button title='Submit'
      disabled={!isValid}
      onPress={handleSubmit} />
    </View>

  )}        
</Formik>
    )

}
const styles=StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#fff'
    },
    input:{
        marginLeft:5,
        marginTop:10,
        fontSize:16
    },
    error:{
        fontSize:12,
        marginLeft:5,
        color:'red'

    }

})
export default EditFormScreen