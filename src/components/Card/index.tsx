import { StaticImageData } from "next/image";
import {
  ContainerCard,
  DetailsBook,
  DetailsColumn,
  HeaderCard,
  ImageColumn,
  Stars,
} from "./styles";
import { Star } from "phosphor-react";

type Props = {
  src: StaticImageData;
  assessment: number;
  nameBook: string;
  author: string;
  description?: string;
  type?: "big" | "small";
};

export default function Card({
  src,
  nameBook,
  author,
  description = "Passe a propriedade 'description' para inserir uma descrição desse filme!",
  assessment,
  type = "big",
}: Props) {
  if (type === "big") {
    return (
      <ContainerCard
        css={{
          "--type-card-width": type === "big" ? "37.5rem" : "19.25rem",
          "--type-card-height": type === "big" ? "12rem" : "8.125rem",
          "--type-card-background": type === "big" ? "#252D4A" : "#181C2A",
        }}
      >
        <ImageColumn
          src={src}
          alt="imagem do livro"
          css={{
            "--type-image-width": type === "big" ? "6.75rem" : "4rem",
            "--type-image-height": type === "big" ? "9.5rem" : "5.875rem",
          }}
        />
        <DetailsColumn>
          <HeaderCard>
            <span>Hoje</span>
            {assessment === 1 && (
              <Stars>
                <Star size={16} color="#8381D9" weight="fill" />
                <Star size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
              </Stars>
            )}
            {assessment === 2 && (
              <Stars>
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
              </Stars>
            )}
            {assessment === 3 && (
              <Stars>
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
              </Stars>
            )}
            {assessment === 4 && (
              <Stars>
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star size={16} color="#8381D9" />
              </Stars>
            )}
            {assessment === 5 && (
              <Stars>
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
                <Star weight="fill" size={16} color="#8381D9" />
              </Stars>
            )}
          </HeaderCard>
          <DetailsBook>
            <h1>{nameBook}</h1>
            <p className="author">{author}</p>
            <p className="description">{description}</p>
          </DetailsBook>
        </DetailsColumn>
      </ContainerCard>
    );
  } else {
    return (
      <ContainerCard
        css={{
          "--type-card-width": type === "small" ? "19.25rem" : "37.5rem",
          "--type-card-height": type === "small" ? "8.125rem" : "12rem",
          "--type-card-background": type === "small" ? "#181C2A" : "#252D4A",
        }}
      >
        <ImageColumn
          src={src}
          alt="imagem do livro"
          css={{
            "--type-image-width": type === "small" ? "4rem" : "6.75rem",
            "--type-image-height": type === "small" ? "5.875rem" : "9.5rem",
          }}
        />
        <DetailsColumn>
          <DetailsBook>
            <h1>{nameBook}</h1>
            <p className="author">{author}</p>
          </DetailsBook>

          {assessment === 1 && (
            <Stars>
              <Star size={16} color="#8381D9" weight="fill" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 2 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 3 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 4 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star size={16} color="#8381D9" />
            </Stars>
          )}
          {assessment === 5 && (
            <Stars>
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
              <Star weight="fill" size={16} color="#8381D9" />
            </Stars>
          )}
        </DetailsColumn>
      </ContainerCard>
    );
  }
}
