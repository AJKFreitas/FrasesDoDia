import React from 'react';
import {AppRegistry, Image, Text, TouchableOpacity, View} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
const Estilos = {
  botao: {
    backgroundColor: '#fff',
    borderColor: '#538530',
    borderWidth: 3,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },

  pricipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#538530',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
const gerarFrase = () => {
  var numeroColuna1 = Math.random();
  var numeroColuna2 = Math.random();
  var numeroColuna3 = Math.random();
  var numeroColuna4 = Math.random();

  numeroColuna1 = Math.floor(numeroColuna1 * 10);
  numeroColuna2 = Math.floor(numeroColuna2 * 10);
  numeroColuna3 = Math.floor(numeroColuna3 * 10);
  numeroColuna4 = Math.floor(numeroColuna4 * 10);
  alert(
    frasesColuna1[numeroColuna1] +
      ' ' +
      frasesColuna2[numeroColuna2] +
      ' ' +
      frasesColuna3[numeroColuna3] +
      ' ' +
      frasesColuna4[numeroColuna4],
  );
};
const App = () => {
  const {pricipal, botao, textoBotao} = Estilos;
  return (
    <View style={pricipal}>
      <Image source={require('./image/logo.png')} />
      <TouchableOpacity style={botao} onPress={gerarFrase}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

var frasesColuna1 = Array();
frasesColuna1[0] = 'No mundo digital,';
frasesColuna1[1] = 'Proativamente falando,';
frasesColuna1[2] = 'Com o apoio dos stakeholders,';
frasesColuna1[3] = 'Com o avanço da mobilidade,';
frasesColuna1[4] = 'Em termos de melhores práticas,';
frasesColuna1[5] = 'Na quebra de paradigmas,';
frasesColuna1[6] = 'Já que esamos pensando fora da caixa,';
frasesColuna1[7] = 'Falando de alinhamento estratégico';
frasesColuna1[8] = 'Para sair do business as usual,';
frasesColuna1[9] = 'Levando em conta a nova economia,';

var frasesColuna2 = Array();
frasesColuna2[0] = 'a monetização';
frasesColuna2[1] = 'a globalização';
frasesColuna2[2] = 'o compliance';
frasesColuna2[3] = 'a diversidade';
frasesColuna2[4] = 'a sustentabilidade';
frasesColuna2[5] = 'a convergência';
frasesColuna2[6] = 'o foco no core business';
frasesColuna2[7] = 'a inovação';
frasesColuna2[8] = 'a responsividade';
frasesColuna2[9] = 'a rede social';

var frasesColuna3 = Array();
frasesColuna3[0] = 'determina o fator de engajamento';
frasesColuna3[1] = 'pode significar oportunidades';
frasesColuna3[2] = 'é o touchpoint';
frasesColuna3[3] = 'habilita o framework de análise';
frasesColuna3[4] = 'proporciona o empowerment';
frasesColuna3[5] = 'pode ser parte da solução';
frasesColuna3[6] = 'gerencia as expectativas';
frasesColuna3[7] = 'é urgente e importante';
frasesColuna3[8] = 'é o game-changer';
frasesColuna3[9] = 'deveria ser um lição aprendida';

var frasesColuna4 = Array();
frasesColuna4[0] = 'para a sinergia das ações planejadas.';
frasesColuna4[1] = 'na busca da relação ganha-ganha';
frasesColuna4[2] = 'para sair da zona de conforto';
frasesColuna4[3] = 'nas visões holísticas dos projetos.';
frasesColuna4[4] = 'em uma organização de classe mundial.';
frasesColuna4[5] = 'para a determinação do ROI na organização';
frasesColuna4[6] = 'para nos posicionarmos no cutting-edge do segmento';
frasesColuna4[7] = 'no universo de consumidores multitela';
frasesColuna4[8] = 'nas ações on e off line';
frasesColuna4[9] = 'nas ações de valor agregado';