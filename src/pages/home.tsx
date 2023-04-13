import Card from "@/components/Card";
import Close from "@/components/Close";
import Input from "@/components/Input";
import Link from "@/components/Link";
import Navigation from "@/components/Navigation";
import Tag from "@/components/Tag";
import ImageBookText from "../assets/arquitetura-limpa.png";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Card
        src={ImageBookText}
        assessment={2}
        author="Mateus Raimundo"
        description="melhor livro do melhor autor dkfhdjh kjashf kldhfk hsdlf hslkdfh lskdfhlkh kdh lksjfhl kjdhflk jhlfkh lksdhflk hflksdh lkshfk hslkdfh sklfhkl jdhfkjh kjfh klshflk hfklsh dj"
        nameBook="como eu sou lindo"
      />
      <Card
        src={ImageBookText}
        assessment={4}
        author="Mateus Raimundo"
        type="small"
        nameBook="como eu sou lindo"
      />
      <div style={{ display: "flex", marginTop: "100px" }}>
        <Tag title="Computação" />
        <Tag title="Sou lindo" />
        <Tag title="todos somos lindos" />
      </div>
      <div style={{ display: "flex" }}>
        <Input placeholder="oie" />
        <Input placeholder="teste" />
      </div>
      <Navigation title="Início" />
      <Navigation title="teste 2" selected={true} />
      <Close />
      <Close icon="checked" />
      <Close withBackground={false} />
      <Link title="clica, aqui é um link!" Color="blue" direction="right" />
    </>
  );
}
