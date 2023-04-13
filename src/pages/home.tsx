import Close from "@/components/Close";
import Link from "@/components/Link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Navigation title="Início" />
      <Navigation title="teste 2" selected={true}  />
      <Close />
      <Close icon="checked" />
      <Close withBackground={false} />
      <Link title="clica, aqui é um link!" Color="blue" direction="right" />
    </>
  );
}
