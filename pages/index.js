import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const r = useRouter();

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
        <TabBar></TabBar>
        <URLbox dir="row">
          <Input
            border="none"
            borderRadius="3.125rem 0 0 3.125rem;"
            width="100%"
            placeholder="Paste your URL here.."
          ></Input>
          <Button
            borderRadius="0 3.125rem 3.125rem 0;"
            text="Customize"
            type="IconButton"
            ButtonFaIconName={faChevronDown}
          />
        </URLbox>
        <Container width="100%">
          <Icon faIconName={faUpload} ></Icon>
          <SubHeader text="Drag and drop a file here"></SubHeader>
          <p>or</p>
          <Button text="Choose a file"></Button>
        </Container>
      </Wrapper>

      <Button text="upload" type="default" />
    </Flexbox>
  );
};
