import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi';
import { Container, Content } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';

export function Movie() {
    return(
        <Container>
            <Header/>
                <main>
                    <Content>
                        <header>
                            <Link to="/">
                                <FiArrowLeft/> Voltar
                            </Link>
                        </header>

                        <h1>Interestellar</h1> 
                        <span> <FiStar/> <FiStar/> <FiStar/> <FiStar/> <FiStar/> </span>

                        <div className="info">
                            <img 
                                src="https://github.com/lucasfagundesf.png" 
                                alt="Foto do usuário" 
                            />
                            <p>Por Lucas Fagundes</p>
                            <FiClock/> <p>23/05/22 às 08:00</p>
                        </div>

                        <div className="tagsM">
                            <Tag title='Ficção Científica' />
                            <Tag title='Drama' />
                            <Tag title='Família' />
                        </div>
                        
                        <p>Esta base apocalíptica de “Interstellar” serve como impulso para uma jornada de ficção científica que, infelizmente, pouco deve a contextos racionais, percetíveis ou constantes. A primeira falha intrigante do filme reside precisamente nas origens dessa base apocalíptica, porque nunca nos é explicado com pormenor ou objetividade as origens do iminente apocalipse que ameaça a Humanidade. Os primeiros trinta minutos do filme perdem um certo tempo a mostrar e ilustrar as consequências catastróficas que a Humanidade tem que enfrentar por causa de problemas relativos ao excesso de população, aos impactos ambientais ou às consequências do capitalismo excessivo, mas falha redondamente na hora de explicar em concreto como é que estas crises em separado conduziram ao problema atual do planeta.</p>
                        <p>É percetível por tudo que é retratado que o problema que a Terra tem para resolver é extremamente complexo e grave, mas ficam no ar imensas questões que nunca são devidamente respondidadas, por exemplo, nunca se percebe muito bem porque é que, a certa altura, vários governos mundiais decidiram por no ar vários drones não tripulados para observar o Planeta, tendo posteriormente decidido que esses mesmo drones deveriam ficar no ar mesmo após o cancelamento de todos os programas militares ou espaciais do planeta. Várias questões de lógicas similares impõem-se em relação a outros pormenores que vão muito além da explicação da catástrofe que assola o planeta, porque nunca ninguém explica em nenhum ponto porque é que os exércitos do mundo foram extintos; porque é que a tecnologia mundial parou de evoluir; porque é que os vários países do mundo começaram a limitar o acesso à tecnologia e a uma educação mais produtiva; como é que se encontra o cenário geopolítico mundial para justificar tal caos mundial; porque é que instrumentos importantes, como Ressonâncias Magnéticas, parecem ter desaparecido do mapa apesar de serem uma mais valia; porque é que os Estados Unidos sentiram a necessidade de reescrever a sua história para adaptá-la às necessidades morais da população atual; como é que ao longo do filme não se vê em algum lado meios noticiosos; porque é que toda a tecnologia existente parece ter regredido décadas em relação às tecnologias que temos atualmente ou porque é que ninguém na Terra consegue inventar pesticidas úteis para terminar com as pragas ou, então, começar a praticar cultivos em áreas plenamente controladas para combater a falta de comida. É claro que também ficamos sem saber, por exemplo, como é que a Terra resiste tantos anos aos seus problemas apesar da situação ser tão grave como os cientistas pintam, como também ficamos perplexos por descobrir que, perto de vinte anos após o inicio do filme, os cultivos de milho ainda existem apesar da personagem interpretada por Michael Caine ter previsto que o mesmo iria desaparecer em poucos anos.</p>
                        <p>As explicações quanto a possíveis substituições alimentares ou possíveis ideias para reverter a situação da Terra também são sempre ignoradas pelo argumento deste mega projeto, que claramente não se preocupou o suficiente para explicar, contextualizar e justificar a base da problemática que desencadeia toda a sua intriga. É uma simples falha de lógica bastante grave para um filme que mexe com problemáticas bem mais complexas e difíceis de explicar, como é o caso das teorias astrofísicas. É por isso que não se compreende como é que questões tão preponderantes e simples ficam sem uma resposta lógica e foram praticamente ignoradas pelos criadores de uma história que, no final, parece apenas ter sido explorada em parte, tendo muito do que a rodeia sido propositadamente esquecido ou então explorado com uma rapidez imprudente.</p>
                        <p>A partir do momento que “Interstellar” salta para um cenário puramente espacial, a sua intriga começa a ficar genuinamente mais intelectualista e cientifica. É portanto a partir do momento que os exploradores espaciais partem na sua longa viagem que começamos a ser bombardeados com informações cientificas respeitantes a teorias complexas e eventos inexplicáveis, assim sendo, somos presenteados com explicações ora demasiado complexas ora demasiado simplificadas e ilustrações impressionantes mas porventura descompactadas de questões importantes, como as propriedades de um Wormhole; as consequências da aplicação da Teoria da Relatividade; os perigos e apartes de um Buraco Negro; as explicações sobre as possibilidades e impossibilidades de viagens espaciais e temporais; os problemas dos dilemas da gravidade na aplicação prática de teorias relativas a viagens temporais ou para outras dimensões; a manifestação prática de uma quinta dimensão; a possibilidade de vida alienígena ou envio de mensagens do futuro para o passado e vice versa, enfim, uma série de questões téoricas que em “Interstellar” são postas em prática por intremédio de uma jornada de sobrevivência e necessidade.</p>
                    </Content>
                </main>
        </Container>
    );
}