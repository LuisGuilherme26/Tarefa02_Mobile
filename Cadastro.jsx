import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { useState } from 'react';
const Cadastro = ({ navigation }) => {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");

    const pessoa = {nome,idade,email}

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Cadastro</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setIdade}
                    value={idade}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />
                <Pressable style={styles.button} onPress={() => navigation.navigate("Perfil",pessoa)}>
                    Ok
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 30,
        backgroundColor: "#000"
    },
    h1: {
        fontSize: 90,
        fontWeight: "bold",
        color: "white"
    },
    input: {
        backgroundColor: "transparent",
        width: 600,
        padding: 20,
        borderWidth: 10,
        borderColor: "purple",
        color: "white",
        fontSize: 50,
        margin: 10
    },
    button: {
        marginTop: 60,
        width: 600,
        padding: 20,
        backgroundColor: "purple",
        color: "white",
        fontSize: 50,
        textAlign: "center"
    }
})

export default Cadastro