import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observacoes" />
                    <Section title="Links uteis">
                        <NoteItem value="https://github.com/henriqueganz" />
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>


        </Container>
    )
}