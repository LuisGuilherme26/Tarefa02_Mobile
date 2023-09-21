import { View, Text, Pressable, StyleSheet, Image } from 'react-native'

const Perfil = ({ route, navigation }) => {
    const { nome, idade, email } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Perfil</Text>
            <View>
                <Text style={styles.text}>{nome}</Text>
                <Text style={styles.text}>{idade}</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
                Home
            </Pressable>
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
    text: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    },
    button: {
        marginTop: 60,
        width: 600,
        padding: 20,
        backgroundColor: "purple",
        color: "white",
        fontSize: 50,
        textAlign: "center"
    },
    img: {
        width: 200,
        height: 200
    }
})

export default Perfil