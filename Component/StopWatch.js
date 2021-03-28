import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const StopWatch = () => {
  
  let [count, setCount] = useState(0)

  const increase = () => {
           setCount(count + 1)
            // console.log(count)
          }

  const decrease = () => {
    setCount(count - 1)
  }

          return ( 
                    <View style={styles.container}>
                              <Text style={{fontSize: 20, marginBottom: 10}}>COUNTER</Text>
          <Text style={styles.counts}>{count}</Text>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={increase}><Text style={styles.inc}>INCREASE</Text></TouchableOpacity>
          <TouchableOpacity onPress={decrease}><Text style={styles.dec}>DECREASE</Text></TouchableOpacity>
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
          inc: {
            color: 'red',
            fontSize: 20,
          },
          dec: {
            color: 'blue',
            fontSize: 20,
            marginLeft: 10
          },
          counts: {
            color: 'green',
            fontSize: 30
          }
        });
export default StopWatch;