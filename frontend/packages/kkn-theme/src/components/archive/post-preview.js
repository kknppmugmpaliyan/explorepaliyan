import { Flex, Collapse, useDisclosure, Image } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import PostTags from "../post/post-tags";
import { styled } from "frontity";
import { BsDot } from "react-icons/bs"
import StyleControl from "../constant/style-control"
import DefaultImage from "../../assets/default-post.png"

const Title = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #262626;
`

const PublishDate = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
display: inline;`

const Description = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #262626;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
display: -webkit-box;
text-align: justify;
text-justify: inter-word;
`
const PostPreview = ({ data, ...rest }) => {
  const { title, excerpt, featured_media, link, tags, dateParsed} = data;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Flex
          direction="column"
          position="relative"
          bg="white"
          as="article"
          shadow="md"
          borderRadius="10px"
          {...rest}
      >
        {/* Use the frontity settings for featuredPost here */}
        {/*{featured_media && featured_media.src && (*/}
        {/*    <Link link={link}>*/}
        {/*      <PostImageWithOverlay {...featured_media} />*/}
        {/*    </Link>*/}
        {/*)}*/}
          <Link link={link}>
              <Image objectFit="cover" src={featured_media.src || DefaultImage} borderRadius="10px 10px 0 0" shadow="md" h="240px" w="100%"/>
          </Link>
        <Flex p="40px" flexGrow="1" direction="column">
          <Link link={link}>
            <Title>
              {title}
            </Title>
          </Link>
            <Collapse startingHeight={32} in={isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                <Flex flexWrap="wrap" align="center">
                    <PublishDate>
                        {dateParsed}
                    </PublishDate>
                    <BsDot size="32px" color={StyleControl.mainColor}/>
                    <PostTags color="black" justify="flex-start" tags={tags} />
                </Flex>
            </Collapse>
            <Description>
                {excerpt}
            </Description>
        </Flex>
      </Flex>
  );
};

export default PostPreview;