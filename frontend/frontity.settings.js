import { MAPBOX_ACCESS_TOKEN } from "./env.js";

const settings = {
  name: "frontend",
  state: {
    frontity: {
      url: "https://explorepaliyan.com",
      title: "Explore Paliyan",
      description: "Paliyan - Hidden Gem of Gunung Kidul",
    },
    mapbox: {
      mapboxAccessToken: MAPBOX_ACCESS_TOKEN,
      latitude: -8.017236133325647,
      longitude: 110.54945908255934,
      zoom: 13,
    },
  },
  packages: [
    {
      name: "kkn-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "Explore Paliyan",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
          // the top-level navigation labels and links
          menu: [
            ["Beranda", "/"],
            ["Desa", "/category/desa/"],
            ["Produk UMKM", "/product/"],
            ["Artikel Edukasi", "/category/blog/"],
            ["Peta", "/maps/"],
          ],
          // the social links
          socialLinks: [
            ["instagram", "https://www.instagram.com/kknpaliyan/"],
            [
              "youTube",
              "https://www.youtube.com/channel/UCE1KmKynEiPtHcJRxHeR7bQ",
            ],
            ["whatsApp", "https://wa.me/628979510436"],
          ],
          // footer categories
          categories: [
            ["Desa", "/category/desa"],
            ["Produk UMKM", "/product"],
            ["Artikel Edukasi", "/category/blog"],
            ["Peta", "/maps"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#e9f5f2",
              100: "#d4dcd9",
              200: "#bbc3be",
              300: "#a1aba5",
              400: "#87938b",
              500: "#6d7972",
              600: "#555f58",
              700: "#323c34",
              800: "#232924",
              900: "#272727",
            },
            accent: {
              50: "#ede4d3",
              100: "#fbe3b2",
              200: "#f6d086",
              300: "#f1be58",
              400: "#fedb46",
              500: "#d49212",
              600: "#a5710b",
              700: "#775105",
              800: "#483100",
              900: "#1d0f00",
            },
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://dashboard.explorepaliyan.com",
          postTypes: [
            {
              type: "product",
              endpoint: "product",
              archive: "/product",
            },
            {
              type: "umkm",
              endpoint: "umkm",
              archive: "/umkm",
            },
            {
              type: "wisata",
              endpoint: "wisata",
              archive: "/wisata",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
