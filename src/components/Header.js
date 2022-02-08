import React from "react";
import { StyleHeader,Nav,Image } from "./styles/Header.style";
import { Container,Button } from "./styles/Container.style";
import { Flex } from "./styles/Flex.style";



export default function Header() {
  return (
    <StyleHeader >
      <Container>
      <Nav>
      <Image src='./logo192.png' alt='sd'/>
        </Nav>

        <Flex>
          <div>
            <h1>Build the Community Your Fans Will Love </h1>
            <p>
            Let's say you want to create a simple and reusable component that you can use throughout your application. There should be a normal version and a big and primary version for the important buttons. This is what it should look like when rendered: (this is a live example, click on them!)
            </p>
            <Button bg='#ff8' color='#d765dea3'>
               Get Started For Free
            </Button>

          </div>
        </Flex>
      </Container>
    </StyleHeader>
  );
}
