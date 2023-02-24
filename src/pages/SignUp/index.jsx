import { Background, Container, Form } from './styles';
import { FiUser, FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    return(
        <Container>
            <Background />
            <Form>
                <h1>Rocketnotes</h1>
                <p>Aplicacao para salvar e gerenciar seus links</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder='Name'
                    type='Text'
                    icon={FiUser}
                />

                <Input
                    placeholder='Email'
                    type='Text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                />  

                <Button title="Cadastrar"/>

                <a href='#'>
                    Voltar para o login
                </a>
            </Form>
        </Container>
    )
}