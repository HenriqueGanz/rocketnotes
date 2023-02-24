import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir Nota" />

          <h1>Introducao ao React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus modi sit laboriosam nemo doloremque at veritatis
            vero sed, impedit accusantium nostrum ratione vel error,
            perferendis hic tenetur sapiente aperiam nesciunt?
          </p>

          <Section title = "Links uteis">
            <Links>
              <li><a href='#'>Item 1</a></li>
              <li><a href='#'>Item 2</a></li>
              <li><a href='#'>Item 3</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="NodeJs"/>
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  )

}