import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { FiPlus, FiSearch } from 'react-icons/fi';
import React from 'react';

export function Home() {
    return(
        <Container>
            <Brand>
            <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive />
                </li>
                <li>
                    <ButtonText title="React" />
                </li>
                <li>
                    <ButtonText title="Node" />
                </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name:'Rocketseat' },
                            { id: '2', name: 'React' }
                            ]
                        }}/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}