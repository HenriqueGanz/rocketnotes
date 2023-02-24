import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/henriqueganz.png" alt="foto do usuario"/>
                
                <div>
                    <span>Bem-vindo</span>
                    <strong>Henrique Ganz</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}