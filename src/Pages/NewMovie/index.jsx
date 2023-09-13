import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Item } from '../../components/Item';
import { Link } from 'react-router-dom';

export function NewMovie() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <FiArrowLeft /> Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="title">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <TextArea placeholder="Observações"/>

                    <h2>Marcadores</h2>
                    <div className='tags'>
                        <Item value="React" />
                        <Item isNew placeholder="Novo marcador"/>
                    </div>
                    

                    
                        <div className="btn">
                            <Button title="Excluir filme" className="excluir" />
                            <Button title="Salvar alterações"/>
                        </div>
                    
                </Form>
            </main>
        </Container>
    );
}