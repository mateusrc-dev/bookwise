import { Div, NavigationContainer } from "./styles";
import { ChartLineUp } from "phosphor-react";

type NavigationProps = {
  title: string;
  selected?: boolean;
};

export default function Navigation({
  title,
  selected = false,
}: NavigationProps) {
  return (
    <NavigationContainer
      css={{
        "--selected": selected === true ? "brightness(1)" : "brightness(0.7)",
      }}
      href=""
    >
      {selected === true && <Div />}
      <ChartLineUp size={24} color="#F8F9FC" />
      <p>{title}</p>
    </NavigationContainer>
  );
}
