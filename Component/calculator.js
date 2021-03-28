import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Alert, Platform } from "react-native";

const Calculator = () => {

          const [value, setValue] = useState('')

const evaluateNum = () => {
  
  if(value){
    let number = eval(value)
    number = number.toString()
    setValue(number)
  }
  else {
    Alert.alert('Please enter the numbers')
  }
}

          return ( 
                    <View style={styles.container}>
                              <Text>HELLO</Text>
                              <TextInput
                              style={styles.input}
                              value={value}
                              onChangeText={(e) => setValue(e)} />

                    <TouchableOpacity style = {{fontSize: 18, marginTop: 6, marginBottom: 6}} onPress = {() => setValue('')}>
                              <Text>CLEAR ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{fontSize: 18, marginTop: 6, marginBottom: 6}} onPress = {() => setValue(value.slice(0, -1))}>
                              <Text>BACK</Text>
                    </TouchableOpacity>

                    <View style={styles.btn}>
                             
                              <TouchableOpacity onPress = {() => setValue(value + 1)}><Text style={styles.btnNum}>1</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + 2)}><Text style={styles.btnNum}>2</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + 3)}><Text style={styles.btnNum}>3</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + '+')}><Text style={styles.btnNum}>+</Text></TouchableOpacity>
                    
                    </View>
                    
                    <View style={styles.btn}>
                    
                              <TouchableOpacity onPress = {() => setValue(value + 4)}><Text style={styles.btnNum}>4</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + 5)}><Text style={styles.btnNum}>5</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + 6)}><Text style={styles.btnNum}>6</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + '-')}><Text style={styles.btnNum}>-</Text></TouchableOpacity>
                    
                    </View>
                    
                    <View style={styles.btn}>
                    
                              <TouchableOpacity onPress = {() => setValue(value + 7)}><Text style={styles.btnNum}>7</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + 8)}><Text style={styles.btnNum}>8</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + 9)}><Text style={styles.btnNum}>9</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + '*')}><Text style={styles.btnNum}>*</Text></TouchableOpacity>
                    
                    </View>
                    
                    <View style={styles.btn}>
                    
                              <TouchableOpacity onPress = {() => setValue(value + 0)}><Text style={styles.btnNum}>0</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + '.')}><Text style={styles.btnNum}>.</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {evaluateNum}><Text style={styles.btnNum}>=</Text></TouchableOpacity>
                              <TouchableOpacity onPress = {() => setValue(value + '/')}><Text style={styles.btnNum}>/</Text></TouchableOpacity>
                    
                    </View>
                    
                    </View>
                    
           );
}

const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          input: {
                    borderWidth: 2,
                    borderStyle: 'solid',
                    width: '80%',
                    marginTop: 5,
                    fontSize: 30,
                    marginLeft: 10         
          },
          btn: {
                    flexDirection: 'row',
          },
          btnNum: {
                    color: 'blue',
                    fontSize: 30,
                    marginLeft: 17,
                    marginRight: 17
          }
        });

export default Calculator;