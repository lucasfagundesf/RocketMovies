import { Container, Content, Section } from "./styles";
import { FiPlus, FiStar } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Review } from '../../components/Review';


export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <main>
                    <Section to="/newmovie">
                        <h1>Meus filmes</h1>
                        
                        <button > <FiPlus /> Adicionar filme </button>
                    </Section>
                    <Review to="/movie/:5" data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                    <Review data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                    <Review data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                    <Review data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                    <Review data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                    <Review data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                    <Review data={{
                        title: 'Interestellar',
                        rate: [
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>,
                            <FiStar/>
                        ],
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id metus sed risus tempus laoreet. Nulla eget eleifend ante. Curabitur volutpat, enim ut luctus sodales, justo mi dictum dui, et commodo nunc nunc a tortor.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '1', name: 'Família'}
                        ]
                    }}/>
                </main>
            </Content>
        </Container>
    );
}