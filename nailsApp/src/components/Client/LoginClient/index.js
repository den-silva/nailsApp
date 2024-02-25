import React, { useState } from 'react';  
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';  
import { Image } from 'react-native';  


export default function LoginClient() {  
    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");  
    
    const handleLogin = () => {  
      // adicione aqui a lógica de login  
    };  

    return (  
        <View style={styles.container}>  
          <Text style={styles.title}>Albuquerque Nails</Text> 

          <Image  
            style={styles.logo}  
            source={require('../../../../assets/logoNails.png')}  
          />  
          <TextInput  
            style={styles.input}  
            placeholder="E-mail ou nome de usuário"  
            value={username}  
            onChangeText={setUsername}  
          />  
          <TextInput  
            style={styles.input}  
            placeholder="Senha"  
            value={password}  
            onChangeText={setPassword}  
            secureTextEntry  
          />  
          {/* <Button title="Entrar" onPress={handleLogin} style={styles.buttonLogin} />   */}

          <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>    
            <Text style={styles.buttonText}>Entrar</Text>    
          </TouchableOpacity>  


          <TouchableOpacity onPress={() => console.log("Redefinir senha")}>  
            <Text style={styles.forgotPassword}>Esqueceu a senha? Redefina aqui</Text>  
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => console.log("Cadastrar")}>  
            <Text style={styles.signup}>Não possui uma conta? Cadastre-se aqui</Text>  
          </TouchableOpacity>  
        </View>  
      );  
    }  

    const styles = StyleSheet.create({  
        container: {  
          flex: 1,  
          justifyContent: 'center',  
          padding: 24,
          backgroundColor:"#C29A9B",
          width:'100%'
        },
        
        title: {  
            //fontFamily:'calibri',
            fontSize: 24,  
            marginBottom: 20, 
            textAlign:'center' 
          }, 
        input: {  
          height: 40,  
          borderColor: '#000000',  
          borderWidth: 1,  
          marginBottom: 10,  
          paddingLeft: 8,
          borderRadius: 6,  

        }, 
        
        buttonLogin:{
            backgroundColor:'#000000',  
            padding: 10,  
            borderRadius: 6,  
            alignItems: 'center',  
            justifyContent: 'center', 
        },

        buttonText: {  
            color: '#9b7b7c',  
            fontSize: 16,  
        },

        forgotPassword:{
            marginTop: 10,  
            color: '#000000', 
        },

        signup:{
            marginTop: 10,  
            color: '#000000', 
        },

        logo: {  
            resizeMode: 'contain',  // Mantém a imagem proporcional  
            alignSelf: 'center',
            marginBottom: 20,
            borderRadius: 100            
        },

        
      });  