import Input from "@/components/Input";
import Menu from "@/components/Menu";
import {
  CardsContainer,
  ExplorerContainer,
  ExplorerContent,
  HeaderContainer,
  HeaderHome,
  TagsContainer,
} from "@/styles/pages/explorer";
import { Binoculars } from "phosphor-react";
import ImageTest from "../assets/codigo-limpo.png";
import { useState } from "react";
import Tag from "@/components/Tag";
import Card from "@/components/Card";

export default function Explorer() {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false);
  const [handleModal, setHandleModal] = useState<boolean>(false);

  function handleStateModal() {
    if (handleModal === false) {
      setHandleModal(true);
    } else {
      setHandleModal(false);
    }
  }

  console.log(handleModal)

  return (
    <ExplorerContainer>
      <div style={{ padding: "1.25rem 0 1.25rem 1.25rem" }}>
        {loggedInUser ? (
          <Menu avatarUser={ImageTest} nameUser="Mateus" loggedInUser={true} />
        ) : (
          <Menu />
        )}
      </div>
      <ExplorerContent>
        <HeaderContainer>
          <HeaderHome>
            <Binoculars size={32} color={"#50B2C0"} />
            <h1>Início</h1>
          </HeaderHome>
          <Input placeholder="Buscar livro ou autor" />
        </HeaderContainer>
        <TagsContainer>
          <Tag title="Tudo" />
          <Tag title="Computação" />
          <Tag title="Educação" />
          <Tag title="Fantasia" />
          <Tag title="Ficção científica" />
          <Tag title="Horror" />
          <Tag title="HQs" />
          <Tag title="Suspense" />
        </TagsContainer>
        <CardsContainer>
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
            onClickCard={handleStateModal}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
          <Card
            type="small"
            author="Mateus Raimundo"
            nameBook="Lindo"
            src={ImageTest}
            assessment={3}
          />
        </CardsContainer>
      </ExplorerContent>
    </ExplorerContainer>
  );
}
