import Close from "@/components/Close";
import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Close />
      <Close icon="checked" />
      <Close withBackground={false} />
      <Link title="clica, aqui é um link!" Color="blue" direction="right" />
    </>
  );
}
