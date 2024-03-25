import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import Vaga from '../../components/vaga';

const data = [
  {
    id: '1',
    titulo: 'Desenvolvedor Back-End',
    salario: 'Salário: R$3000',
    descricao: 'Descrição: Desenvolvedor Back-End Júnior, trabalha com Java',
    contato: '(11) 98765-4321',
  },
  {
    id: '2',
    titulo: 'Desenvolvedor Front-End',
    salario: 'Salário: R$2000',
    descricao:
      'Descrição: Desenvolvedor Front-End Júnior, trabalha com JavaScript',
    contato: '(11) 98765-4321',
  },
  {
    id: '3',
    titulo: 'Desenvolvedor Mobile',
    salario: 'Salário: R$4000',
    descricao:
      'Descrição: Desenvolvedor Mobile Júnior, trabalha com React-Native',
    contato: '(11) 98765-4321',
  },
  {
    id: '4',
    titulo: 'UX/UI Designer',
    salario: 'Salário: R$2000',
    descricao: 'Descrição: UX/UI Designer Júnior, trabalha com Figma',
    contato: '(11) 98765-4321',
  },
  {
    id: '5',
    titulo: 'UX/UI Designer',
    salario: 'Salário: R$2000',
    descricao: 'Descrição: UX/UI Designer Júnior, trabalha com Figma',
    contato: '(11) 98765-4321',
  },
];

function Vagas() {
  const renderVaga = ({ item }) => (
    <Vaga
      titulo={item.titulo}
      salario={item.salario}
      descricao={item.descricao}
      contato={item.contato}
    />
  );

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Vagas</Text>

      <FlatList
        data={data}
        renderItem={renderVaga}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Vagas;
