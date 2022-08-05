import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <SafeAreaView
    style={styles.safeAreaViewStyle}
    >
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}> */}
        <View>
            <View style={styles.titleView}>
              <Image source={require('../assets/images/zera-logo.png')} 
                          style={styles.image} 
              />
              <Text style={styles.appTitle}>era</Text>
            </View>
            <View style={{ marginTop: 350, marginLeft: 12, marginRight: 12  }}>
              <TextInput 
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                autoComplete="off"
                placeholder="Email"
                placeholderTextColor="white" 
              />
              <TextInput 
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                autoComplete="off"
                placeholder="Password"
                placeholderTextColor="white" 
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.submitButton}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            
            
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    appTitle: {
      fontSize: 50,
      fontWeight: '800',
      color: 'white',
      marginLeft: -5,
      marginBottom: 25/2,
    },
    safeAreaViewStyle: {
      backgroundColor: '#545454',
      flexDirection: 'column', 
      flex: 1,
      justifyContent: 'center'
    },
    titleView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    input: {
      height: 50,
      paddingLeft: 10,
      width: '100%',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
      color: 'white',
      fontSize: 20,
      marginTop: -5
    },
    submitButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        padding: 10,
        alignItems: 'center',
        marginTop: 12
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 80,
      alignSelf: 'center',
      margin: 8,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  