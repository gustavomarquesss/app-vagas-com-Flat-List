import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

function Vaga(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.texto}>{props.salario}</Text>
        <Text style={styles.texto}>{props.descricao}</Text>
        <Text style={styles.texto}>{props.contato}</Text>
      </View>
    </View>
  );
}

export default Vaga;
