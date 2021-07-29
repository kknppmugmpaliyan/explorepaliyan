import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Box, Stack, Button } from "@chakra-ui/react";
import StyleControl from "../constant/style-control";

export const PaginationButton = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  min-height: 60px;

  cursor: pointer;
  border: none;
  background: #333a35;
  color: #eca419;

  &:hover {
    background-color: #48584d;
    color: #eca419;
  }

  &[aria-disabled="true"] {
    background-color: #dfd7c7;
    cursor: auto;
    color: #a0a0a0;
  }
`;

const TextButtonClickAll = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

export const PrevLink = ({
  isDisabled,
  label = "See older posts",
  link,
  ...props
}) => (
  <Box width="100%" {...props}>
    <ButtonAll link={link} isDisabled={isDisabled} w="100%">
      <TextButtonClickAll>Lebih lama</TextButtonClickAll>
      <IoIosArrowRoundForward size="20px" color="#FFFFFF" />
    </ButtonAll>
  </Box>
);

export const NextLink = ({
  isDisabled,
  label = "See newer posts",
  link,
  ...props
}) => (
  <Box width="100%" {...props}>
    <ButtonAll link={link} isDisabled={isDisabled} w="100%">
      <IoIosArrowRoundBack size="20px" color="#FFFFFF" />
      <TextButtonClickAll>Lebih baru</TextButtonClickAll>
    </ButtonAll>
  </Box>
);

const ButtonAll = ({ children, link, ...props }) => (
  <Link link={link}>
    <Button
      borderRadius={10}
      size="lg"
      bgColor={StyleControl.mainColor}
      {...props}
    >
      {children}
    </Button>
  </Link>
);

const Pagination = ({ state, actions, libraries, ...props }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  const isThereNextPage = page > 1;
  const isTherePreviousPage = page < totalPages;

  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query,
  });

  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query,
  });

  // Fetch the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <Stack direction="row" spacing="40px" {...props}>
      <NextLink link={prevPageLink} isDisabled={!isThereNextPage} />
      <PrevLink link={nextPageLink} isDisabled={!isTherePreviousPage} />
    </Stack>
  );
};

export default connect(Pagination);
