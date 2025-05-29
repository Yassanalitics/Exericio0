import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextMask } from "react-native-masked-text";
import { Text, Button, TextInput } from "react-native-paper";

export default function AlunoForm({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, SetTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  function salvar() {
    const aluno={
      nome,
    }
    alert("Nome preenchido: " + nome);
  }

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ marginTop: 10 }}>
        Informe os dados:
      </Text>

      <TextInput
        label="Nome"
        style={styles.input}
        mode="outlined"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        label="CPF"
        style={styles.input}
        mode="outlined"
        value={cpf}
        onChangeText={setCpf}
        render={(props)=> (
          {...props}
          
        )}
      />
      <TextInput
        label="telefone"
        style={styles.input}
        mode="outlined"
        value={telefone}
        onChangeText={SetTelefone}
      />
      <TextInput
        label="E-mail"
        style={styles.input}
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        label="Data De Nascimento"
        style={styles.input}
        mode="outlined"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <Button
        style={styles.input}
        mode="contained"
        icon="plus"
        onPress={salvar}
      >
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "90%",
    marginTop: 10,
  },
});
