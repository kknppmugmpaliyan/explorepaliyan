import { Box } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import { decode } from "frontity";
import StyleControl from "../constant/style-control";

export const PostTag = (props) => (
    <Box
        transition="background-color ease 0.25s"
        px="5px"
        border="2px solid"
        borderRadius="5px"
        borderColor={StyleControl.mainColor}
        fontFamily="Poppins"
        textTransform="capitalize"
        fontWeight="medium"
        fontSize="14px"
        display="inline-block"
        _hover={{
            bg: StyleControl.mainColor,
            color: "#FFFFFF",
        }}
        {...props}
    />
);

export const PostTags = ({ tags, limit = 69, color = "white", ...props }) => {
    const limitTags =
        tags.length > limit ? tags.filter((_, idx) => idx < limit) : tags;

    return (
        <>
            {limitTags.map((tag) => (
                <PostTag color={color} key={tag.id} mr="6px" mb="3px" mt="3px">
                    <Link
                        link={tag.link}
                        dangerouslySetInnerHTML={{ __html: decode(tag.name) }}
                    />
                </PostTag>
            ))}
        </>
    );
};

export default PostTags;