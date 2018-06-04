import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';
import Logo from '../../assets/earnit.png'
import Register from "../../screens/Actions/goToRegister";

export default class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    formSubmit = (e) => {
        e.preventDefault();
    }
    openRegister=()=>{
        Register();
    }
    render() {
        return (
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar
                    backgroundColor="rgb(32,53,70)"
                    barStyle="light-content"
                />
                <View
                    style={styles.Logo}>
                    <Image
                        source={Logo}
                        style={{ width: 200, height: 48 }}
                    />
                    <Text style={{ textAlign: "center", color: "#aaa", }}>Get work and work done.</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize={"none"}
                        placeholderTextColor="#aaa"
                        underlineColorAndroid='transparent'
                        style={styles.inputContainer}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => this.refs.password.focus()}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        underlineColorAndroid='transparent'
                        style={styles.inputContainer}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry
                        ref={"password"}
                    />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button_last}
                        onPress={this.openRegister}
                    >
                        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(32,53,70,1)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Logo: {
        flex: 2,
        justifyContent: 'center',
    },
    input: {
        flex: 1,

    },
    inputContainer: {
        height: 40,
        width: 300,
        borderColor: "#9b59b6",
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "#fff",
        borderRadius: 4,
        padding: 10,
        marginBottom: 5
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#f39c12',
        padding: 10,
        marginBottom:5,
        borderRadius: 4
    },
    button_last: {
        alignItems: 'center',
        backgroundColor: '#27ae60',
        padding: 10,
        marginBottom: 5,
        borderRadius: 4
    }

});
