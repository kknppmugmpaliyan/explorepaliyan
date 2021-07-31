import React, { memo } from "react";
import { styled } from "frontity";
import { Image } from "@chakra-ui/react";

const UMKMInfo = (props) => {
  const { name, address, phone, product, image_url } = props.info.properties;
  return (
    <Container>
      <div style={{ color: "#ECA41A", fontSize: 13 }}>
        <b>{name.toUpperCase()}</b>
      </div>
      <hr style={{ marginBottom: "10px" }}></hr>
      <table>
        <tbody>
          <tr style={{ verticalAlign: "top" }}>
            <td>
              <b>Alamat:</b>
            </td>
            <td>{address}</td>
          </tr>
          <tr style={{ verticalAlign: "top" }}>
            <td>
              <b>Telepon:</b>
            </td>
            <td>{phone}</td>
          </tr>
          <tr style={{ verticalAlign: "top" }}>
            <td>
              <b>Produk:</b>
            </td>
            <td>{product}</td>
          </tr>
        </tbody>
      </table>
      <Image src={image_url} w={240} mx="auto" alt={name} />
    </Container>
  );
};

export default memo(UMKMInfo);

const Container = styled.div`
  max-width: 320px;
  background: #fff;
  padding: 12px 24px;
  font-size: 11px;
  line-height: 2;
  color: #6b6b76;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
`;
