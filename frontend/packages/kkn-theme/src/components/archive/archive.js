import { Box, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import ArchiveHeader from "./archive-header";
import ArchiveItem from "./archive-item";
import ProductItem from "./product-item";
import HomepageArchive from "./homepage-archive";
import Pagination from "./pagination";
import { decode } from "frontity";
import Language from "../constant/language";

const Archive = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  if (state.router.link == "/") return <HomepageArchive />;

  return (
    <Box bg="accent.50" as="section">
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          taxonomy={data.taxonomy}
          title={decode(state.source[data.taxonomy][data.id].name)}
        />
      )}

      {/* If product */}
      {data.isProductArchive && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          taxonomy={"Produk UMKM oleh"}
          title={Language.indonesian.desaName}
        />
      )}

      {/* If the list is an author, we render a title. */}
      {data.isAuthor && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          taxonomy="Posts By"
          title={decode(state.source.author[data.id].name)}
        />
      )}

      {/* If all article */}
      {data.isHome && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          title={"Semua Artikel"}
        />
      )}

      <Box
        padding={{ base: "24px", lg: "40px" }}
        bg="white"
        width={{ lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        {!data.isProductArchive && (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="40px">
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              return <ArchiveItem key={item.id} item={item} />;
            })}
          </SimpleGrid>
        )}

        {data.isProductArchive && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="40px">
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              return <ProductItem key={item.id} item={item} />;
            })}
          </SimpleGrid>
        )}

        <Pagination mt="56px" />
      </Box>
    </Box>
  );
};

export default connect(Archive);
