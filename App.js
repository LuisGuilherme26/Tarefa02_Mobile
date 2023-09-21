import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './components/Ativ02/Home';
import Cadastro from './components/Ativ02/Cadastro';
import Perfil from './components/Ativ02/Perfil';
import IMC from './components/Ativ02/IMC';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{title: "Home"}}></Stack.Screen>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{title: "Cadastro"}}></Stack.Screen>
          <Stack.Screen name="Perfil" component={Perfil} options={{title: "Perfil"}}></Stack.Screen>
          <Stack.Screen name="IMC" component={IMC} options={{title: "IMC"}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}