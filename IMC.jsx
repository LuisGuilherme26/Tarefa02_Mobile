import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native'
import { useState } from 'react';

const IMC = ()=> {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const calc = {peso,altura}

    return(
        <View style={styles.container}>
            <Text style={styles.h1}>IMC</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                />
                <Pressable style={styles.button} onPress={() => navigation.navigate("Resultado",calc)}>
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

export default IMC