import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { connect, Head, css, Global } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post/post";
import Product from "./product/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import Maps from "./maps/maps";

// CSS
import mapboxCss from "../styles/mapbox-gl.css";
import mapboxCustomCss from "../styles/mapbox-custom-style.css";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const overrides = extendTheme({
    fonts: {
      heading: "Kelson, system-ui, Helvetica, sans-serif",
    },
    colors: { ...state.theme.colors },
  });

  return (
    <ChakraProvider theme={{ ...overrides }}>
      <FontFace />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box
        as="main"
        mt={{ base: "40px", md: "70px" }}
        minH="calc(100vh - 320px)"
      >
        <Switch>
          <Product when={data.isProduct} />
          <Loading when={data.isFetching} />
          <SearchResults when={data.isSearch} />
          <Archive when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page404 when={data.is404} />
          <Maps when={data.isMapPage} />
        </Switch>
      </Box>

      <Footer />

      {/* Add the header of the site. */}

      <Global styles={css(mapboxCss)} />
      <Global styles={css(mapboxCustomCss)} />
    </ChakraProvider>
  );
};

export default connect(Theme);
