import Menu from "@/components/Menu";
import {
  ContentProfile,
  ProfileContainer,
  SecondColumn,
  ThirdColumn,
} from "@/styles/pages/profile";
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from "phosphor-react";
import Input from "@/components/Input";
import ImageTest from "../assets/historias-extraordinarias.png";
import CardProfile from "@/components/CardProfile";
import Image from "next/image";

export default function Profile() {
  return (
    <ProfileContainer>
      <div style={{ padding: "1.25rem 0 1.25rem 1.25rem" }}>
        <Menu
          loggedInUser={true}
          selectedMenu="profile"
          nameUser="Mateus"
          avatarUser={ImageTest}
        />
      </div>
      <ContentProfile>
        <SecondColumn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "4.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <User size={32} color="#50B2C0" />{" "}
            <span
              style={{
                fontFamily: "Nunito Sans",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "140%",
                color: "#F8F9FC",
              }}
            >
              Perfil
            </span>
          </div>
          <Input placeholder="Buscar livro avaliado" />
          <p
            style={{
              marginTop: "2rem",
              marginBottom: "0.5rem",
              fontFamily: "Nunito Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "160%",
              color: "#D1D6E4",
            }}
          >
            Há 2 dias
          </p>
          <CardProfile assessment={3} />
          <p
            style={{
              marginTop: "2rem",
              marginBottom: "0.5rem",
              fontFamily: "Nunito Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "160%",
              color: "#D1D6E4",
            }}
          >
            Há 2 dias
          </p>
          <CardProfile assessment={3} />
          <p
            style={{
              marginTop: "2rem",
              marginBottom: "0.5rem",
              fontFamily: "Nunito Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "160%",
              color: "#D1D6E4",
            }}
          >
            Há 2 dias
          </p>
          <CardProfile assessment={3} />
        </SecondColumn>
        <ThirdColumn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "75px",
              height: "75px",
              backgroundImage: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
              borderRadius: "999999px",
            }}
          >
            <Image
              src={ImageTest}
              alt="foto do usuário"
              width={72}
              height={72}
              style={{ borderRadius: "9999px" }}
            />
          </div>
          <h3>Mateus Carvalho</h3>
          <span>membro desde 2019</span>
          <div>colocar aqui uma linha</div>
          <div>
            <BookOpen size={32} color={"#50B2C0"} />
            <div>
              <span>3853</span>
              <span>Páginas lidas</span>
            </div>
          </div>
          <div>
            <Books size={32} color={"#50B2C0"} />
            <div>
              <span>10</span>
              <span>Livros avaliados</span>
            </div>
          </div>
          <div>
            <UserList size={32} color={"#50B2C0"} />
            <div>
              <span>8</span>
              <span>Autores lidos</span>
            </div>
          </div>
          <div>
            <BookmarkSimple size={32} color={"#50B2C0"} />
            <div>
              <span>Computação</span>
              <span>Categoria mais lida</span>
            </div>
          </div>
        </ThirdColumn>
      </ContentProfile>
    </ProfileContainer>
  );
}
