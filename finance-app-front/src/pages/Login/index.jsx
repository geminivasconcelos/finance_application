import './style.css';
import CardFromCadastro from '../../components/CarFromCadastro';
import HeaderLC from '../../components/HeaderLC';
import Container from '../../components/Container';

export default function Login() {
    return (
        <Container>
            <HeaderLC />

            <div>
                <CardFromCadastro />
            </div>
        </Container>
    )
}