import Input from "@/components/Input";
import Menu from "@/components/Menu";
import {
  CardsContainer,
  ContainerComments,
  DetailsBookModal,
  ExplorerContainer,
  ExplorerContent,
  HeaderContainer,
  HeaderHome,
  Stars,
  TagsContainer,
  ToAssess,
} from "@/styles/pages/explorer";
import { Binoculars, BookOpen, BookmarkSimple, Star } from "phosphor-react";
import ImageTest from "../assets/codigo-limpo.png";
import { useState } from "react";
import Tag from "@/components/Tag";
import Card from "@/components/Card";
import Close from "@/components/Close";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment";

export default function Explorer() {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false);
  const [handleModal, setHandleModal] = useState<boolean>(false);
  const [assessment, setAssessment] = useState<number>(3);

  function handleStateModal() {
    if (handleModal === false) {
      setHandleModal(true);
    } else {
      setHandleModal(false);
    }
  }

  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal") {
      handleStateModal();
    }
  };

  return (
    <ExplorerContainer>
      {handleModal && (
        <div
          id="modal"
          className={handleModal ? "modal" : "none"}
          onClick={handleOutsideClick}
        >
          <div className="modalContent">
            <button className="close" onClick={() => handleStateModal()}>
              <Close withBackground={false} />
            </button>
            <DetailsBookModal>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
              >
                <Image
                  src={ImageTest}
                  alt="imagem do livro"
                  width={171}
                  height={242}
                  style={{ borderRadius: "10px" }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "Nunito Sans",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "140%",
                      color: "#F8F9FC",
                    }}
                  >
                    14 Hábitos de Desenvolvedores Altamente Produtivos
                  </h3>
                  <p
                    style={{
                      fontFamily: "Nunito Sans",
                      fontWeight: 400,
                      fontSize: "1rem",
                      lineHeight: "160%",
                      color: "#D1D6E4",
                    }}
                  >
                    Zeno Rocha
                  </p>
                  {assessment === 1 && (
                    <Stars>
                      <Star size={20} color="#8381D9" weight="fill" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 2 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 3 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 4 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star size={20} color="#8381D9" />
                    </Stars>
                  )}
                  {assessment === 5 && (
                    <Stars>
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                      <Star weight="fill" size={20} color="#8381D9" />
                    </Stars>
                  )}
                  <p
                    style={{
                      fontFamily: "Nunito Sans",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "160%",
                      color: "#8D95AF",
                      marginTop: "4px",
                    }}
                  >
                    3 avaliações
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem 0",
                  borderTop: `1px solid #252D4A`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  gap: "3.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <BookmarkSimple size={24} color="#50B2C0" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "160%",
                        color: "#D1D6E4",
                      }}
                    >
                      Categoria
                    </p>
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: "140%",
                        color: "#E6E8F2",
                      }}
                    >
                      Computação, educação
                    </p>
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <BookOpen size={24} color="#50B2C0" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "160%",
                        color: "#D1D6E4",
                      }}
                    >
                      Páginas
                    </p>
                    <p
                      style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: "140%",
                        color: "#E6E8F2",
                      }}
                    >
                      160
                    </p>
                  </div>
                </div>
              </div>
            </DetailsBookModal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Nunito Sans",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "160%",
                  color: "#E6E8F2",
                }}
              >
                Avaliações
              </p>
              <ToAssess>Avaliar</ToAssess>
            </div>
            <ContainerComments>
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
              <Comment
                userImage={ImageTest}
                userName="Mateus Raimundo"
                assessmentProp={2}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, corrupti aliquid voluptate ipsum hic temporibus eligendi provident autem necessitatibus officia ad doloremque. Minus quaerat nostrum eaque impedit vitae, architecto optio"
              />
            </ContainerComments>
          </div>
        </div>
      )}
      <div style={{ padding: "1.25rem 0 1.25rem 1.25rem" }}>
        {loggedInUser ? (
          <Menu
            avatarUser={ImageTest}
            nameUser="Mateus"
            loggedInUser={true}
            selectedMenu="explorer"
          />
        ) : (
          <Menu selectedMenu="explorer" />
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
