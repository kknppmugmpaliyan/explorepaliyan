import { Center, Flex, Image, Button } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import { styled } from "frontity";
import { currencyFormat } from "../helpers";
import { AiOutlineShopping } from "react-icons/ai";
import StyleControl from "../constant/style-control";

const ProductName = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: ${StyleControl.mainColor};
  margin-bottom: 16px;
`;

const ProductButtonText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${StyleControl.mainColor};
  display: inline;
  vertical-align: middle;
`;

const ProductButton = ({ link }) => (
  <Link link={link}>
    <Button
      fontFamily="Poppins"
      variant="outline"
      color={StyleControl.mainColor}
      borderColor={StyleControl.mainColor}
      borderRadius={10}
      leftIcon={<AiOutlineShopping size="29px" />}
    >
      Detail Produk
    </Button>
  </Link>
);

const ProductPreview = ({ data, ...rest }) => {
  const { product_name, featured_media, link, product_price, product_link } =
    data;

  return (
    <Link link={link}>
      <Flex
        direction="column"
        position="relative"
        bg="white"
        as="article"
        shadow="md"
        borderRadius="15px"
        {...rest}
      >
        {/* Use the frontity settings for featuredPost here */}
        <Center>
          <Image
            borderRadius="10px"
            boxSize="200px"
            marginTop="24px"
            objectFit="cover"
            src={featured_media.src}
          />
        </Center>
        <Flex p="40px" flexGrow="1" direction="column">
          <ProductName>{product_name}</ProductName>
          <ProductPrice>{currencyFormat(product_price)}</ProductPrice>
          <Center>
            <ProductButton link={link} />
          </Center>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductPreview;
