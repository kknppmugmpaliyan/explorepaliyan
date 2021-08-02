import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import PostTags from "./post-tags";
import { formatDate } from "../helpers";
import { decode } from "frontity";
import StyleControl from "../constant/style-control";

const PostHeader = ({
  heading,
  tags,
  description,
  author,
  date,
  isPage,
  ...props
}) => (
  <Box textAlign="center" {...props}>
    {tags && <PostTags color="black" tags={tags} justifyContent="center" />}
    <Heading
      fontWeight="bold"
      size="2xl"
      mt="30px"
      mb={{ base: "20px", lg: "32px" }}
      textTransform="uppercase"
      dangerouslySetInnerHTML={{ __html: heading }}
    />
    {description && <Text mt={4}>{description}</Text>}
    {/* Don't show the author if we're on a page type */}
    {!isPage && author && (
      <Text fontSize="lg">
        oleh{" "}
        <Link
          fontWeight="bold"
          color={StyleControl.secondaryColor}
          link={author.link}
        >
          {decode(author.name)}
        </Link>
      </Text>
    )}
    {/* Don't show the date if we're on a page type */}
    {!isPage && date && (
      <Text fontSize="md" mt="12px">
        {formatDate(date)}
      </Text>
    )}
  </Box>
);

export default PostHeader;
