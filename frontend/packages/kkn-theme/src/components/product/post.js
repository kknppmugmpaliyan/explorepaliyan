import {
  Box,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Tfoot,
  Button,
} from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import List from "../archive";
import Section from "../styles/section";
import FeaturedMedia from "./featured-media";
import PostHeader from "./post-header";
import { getProductData, formatProductData } from "../helpers";
import Link from "../link";
import StyleControl from "../constant/style-control";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { currencyFormat } from "../helpers";

const tableDataStyle = {
  verticalAlign: "top",
  whiteSpace: "nowrap",
  fontStyle: "italic",
};

const Spacer = () => (
  <>
    <GridItem mt={5}></GridItem>
    <GridItem colSpan={2}></GridItem>
  </>
);

const Post = ({ state, actions }) => {
  const postData = getProductData(state);
  const post = formatProductData(postData);

  // Once the post has loaded in the DOM, prefetch both the
  // home posts and the list component so if the user visits
  // the home page, everything is ready and it loads instantly.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  if (!postData.isReady) return null;

  return (
    <Box bg={StyleControl.pageColor} as="section">
      <PostHeader
        showPattern={state.theme.showBackgroundPattern}
        // taxonomy={"Produk"}
        title={"Detail Produk"}
      />
      <Section boxShadow="lg" bg="white" pb="80px" size="lg" borderRadius="lg">
        <Content
          as={Section}
          px={{ base: "32px", md: "0" }}
          size="lg"
          pt="50px"
        >
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            mx="auto"
            width="100%"
            fontFamily="Poppins"
          >
            <GridItem padding="10px" color="white" textAlign="justify">
              {post.featured_media != null && (
                <FeaturedMedia featured_media={post.featured_media} />
              )}
            </GridItem>
            <GridItem colSpan={2} padding="10px" textAlign="justify">
              <Box ml={10}>
                <Box h={20} fontWeight="bold" fontSize={24}>
                  {post.product_name}
                </Box>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                  }}
                  fontSize={18}
                >
                  <GridItem style={tableDataStyle}>Deskripsi</GridItem>
                  <GridItem colSpan={2}>{post.product_description}</GridItem>
                  <Spacer />
                  <GridItem style={tableDataStyle}>Harga</GridItem>
                  <GridItem colSpan={2}>
                    {currencyFormat(post.product_price)}
                  </GridItem>
                  <Spacer />
                  <GridItem style={tableDataStyle}>Lokasi</GridItem>
                  <GridItem colSpan={2}>{post.location}</GridItem>
                  <Spacer />
                  <GridItem style={tableDataStyle}>Owner</GridItem>
                  <GridItem colSpan={2}>{post.owner}</GridItem>
                  <Spacer />
                  <GridItem style={tableDataStyle}>Nomor Telepon</GridItem>
                  <GridItem colSpan={2}>{post.phone_number}</GridItem>
                </Grid>
              </Box>
            </GridItem>
          </Grid>
        </Content>
      </Section>
      <Box textAlign="center" mx="auto" h={120}>
        {post.product_link && (
          <Button
            size="md"
            bgColor={StyleControl.mainColor}
            marginTop={10}
            color="white"
          >
            <AiOutlineShoppingCart color="white" size={25} />
            <Link link={post.product_link} style={{ padding: 10 }}>
              Beli
            </Link>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default connect(Post);

// This component is the parent of the `content.rendered` HTML. We can use nested
// selectors to style that HTML.
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  ul {
    padding: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
  }

  iframe {
    display: block;
    margin: auto;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
