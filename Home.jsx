import { View, Text, StyleSheet, Pressable } from 'react-native'

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>ATV 0.3</Text>
            <View>
                <Pressable style={styles.button} onPress={()=>navigation.navigate("Cadastro")}>
                    Cadastro
                </Pressable>
                <Pressable style={styles.button} onPress={()=>navigation.navigate("IMC")}>
                    IMC
                </Pressable>
                <Pressable style={styles.button} onPress={()=>navigation.navigate("Cadastro")}>
                    Sobre
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

export default Home