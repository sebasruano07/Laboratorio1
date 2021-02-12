import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Picker, Alert } from 'react-native';

const createAlert = (grados, convertido, conversion) =>
  Alert.alert(conversion, grados + " " + conversion + " " + convertido, 
    [
      {
        text: 'Cancelar',
        style: "cancel"
      },
      {
        text: 'Aceptar',
        style: "cancel"
      }
    ],
    {cancelable: true}
  );

const operatoria = (grados, conversion) => {
  let resultado = 0.0;
  if(conversion == 'F -> C'){
    resultado = (parseFloat(grados) - 32) * 5/9
  }else if (conversion == 'C -> F'){
    resultado = (parseFloat(grados) * 9/5) + 32
  }
  resultado = resultado.toFixed(2);
  createAlert(grados, resultado, conversion);
};

export default function App() {
  const [grados, setGrados] = useState('');
  const [conversion, setConversion] = useState('');
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Ingrese los grados"
        style={styles.inputControl}
        onChangeText={(entrada) => { 
          setGrados(entrada);  
        }}/>

        <Picker
          style={styles.conversionPiker}
          selectedValue={conversion}
          onValueChange={(itemValue, itemIndex) => {
            setConversion(itemValue)
          }}
        >
          <Picker.Item label="F -> C" value="F -> C"/>            
          <Picker.Item label="C -> F" value="C -> F"/>
        </Picker>

        <Button
          title="Convertir"
          onPress ={() => operatoria(grados, conversion)} 
        />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputControl: {
    height: 40,
    width: '85%',
    backgroundColor: '#fff',
    borderBottomColor: '#aaa',
    borderBottomWidth: 2,
    paddingLeft: 10,
    marginBottom: 20,
  },
  conversionPiker: {
    height: 40,
    width: '85%',
    marginBottom: 20
  }
});