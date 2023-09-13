import { Container, Profile } from './styles';

import { Input } from '../Input'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Container>
                <h1>RocketMovies</h1>

                <Input 
                    placeholder="Pesquisar pelo título"
                    type="text"
                />

                <Profile to="/profile">
                    <div>
                        <strong>Lucas Fagundes</strong>
                        <Link to="/">sair</Link>
                    </div>
                    <img 
                        src="https://github.com/lucasfagundesf.png" 
                        alt="Foto do usuário" 
                    />
                </Profile>
        </Container>
    )
}