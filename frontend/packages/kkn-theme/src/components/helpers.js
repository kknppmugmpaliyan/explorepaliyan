function getSrcSet(media) {
  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return srcset;
}

export function getMediaAttributes(state, id) {
  const media = state.source.attachment[id];
  if (!media) return {};

  const srcSet = getSrcSet(media);

  return {
    id,
    alt: media.alt_text,
    src: media.source_url,
    srcSet,
  };
}

export function getPostCategories(state, post) {
  const allCategories = state.source.category;
  const categories =
    post.categories && post.categories.map((catId) => allCategories[catId]);
  return categories ? categories.filter(Boolean) : [];
}

export function getPostAuthor(state, post) {
  return state.source.author[post.author];
}

export function getPostTags(state, post) {
  const allTags = state.source.tag;
  const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);
  return tags ? tags.filter(Boolean) : [];
}

export function getPostData(state) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return { ...post, isReady: data.isReady, isPage: data.isPage };
}

export function getProductData(state) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return { ...post, isReady: data.isReady, isPage: data.isPage };
}

function getParsedExcerpt(e) {
  e = e.replace(/<a.*a>/g, "");
  let s = e.split(/<\/?[a-z]+>/g);
  s = s.join(" ");
  s = s.replace("&hellip;", "").replace("\n", "");
  return s;
}

function parseDate(e) {
  let dt = new Date(e);
  let ye = new Intl.DateTimeFormat("id", { year: "numeric" }).format(dt);
  let mo = new Intl.DateTimeFormat("id", { month: "short" }).format(dt);
  let da = new Intl.DateTimeFormat("id", { day: "2-digit" }).format(dt);
  return `${da} ${mo} ${ye}`;
}

export function formatPostData(state, post) {
  return {
    id: post.id,
    author: getPostAuthor(state, post),
    publishDate: post.date,
    dateParsed: parseDate(post.date),
    title: post.title.rendered,
    categories: getPostCategories(state, post),
    tags: getPostTags(state, post),
    link: post.link,
    featured_media: getMediaAttributes(state, post.featured_media),
    content: post.content.rendered,
    excerpt: getParsedExcerpt(post.excerpt.rendered),
  };
}

export function formatProductData(post) {
  return {
    id: post.id,
    owner: post.owner,
    publishDate: post.date,
    product_name: post.product_name,
    product_price: post.product_price,
    link: post.link,
    location: post.location,
    featured_media: {
      id: post.product_photo.ID,
      alt: post.slug,
      src: post.product_photo.guid,
      srcSet: null,
    },
    product_description: post.product_description,
    phone_number: post.phone_number,
    product_link: post.product_link,
  };
}

export function getFeaturedProduct(state, routeData, count) {
  const returnData = [];
  routeData.forEach((item, idx) => {
    const itemData = state.source[item.type][item.id];
    if (idx < count) returnData.push(itemData);
    else return returnData;
  });
  return returnData;
}

export function splitPosts(state, routeData) {
  const firstThreePosts = [];
  const otherPosts = [];

  routeData.forEach((item, idx) => {
    const itemData = state.source[item.type][item.id];
    if (idx < 3) firstThreePosts.push(itemData);
    else otherPosts.push(itemData);
  });

  return [firstThreePosts, otherPosts];
}

export function omitConnectProps(props) {
  const out = {};
  const propsToOmit = [
    "state",
    "actions",
    "roots",
    "fills",
    "libraries",
    "getSnapshot",
  ];
  const isGetSnapshot = (prop) =>
    typeof prop === "function" && prop.name === "getSnapshot";

  for (const prop in props) {
    if (propsToOmit.includes(prop) || isGetSnapshot(prop)) continue;
    out[prop] = props[prop];
  }

  return out;
}

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "Novemeber",
  "Desember",
];

const formatDay = (day) => {
  const lastLetter = day[day.length - 1];
  if (lastLetter) return `${day}nd`;
  if (lastLetter) return `${day}st`;
  if (lastLetter) return `${day}rd`;
  return `${day}th`;
};

export function formatDate(date) {
  const jsDate = new Date(date);
  const day = jsDate.getDate();
  const month = jsDate.getMonth() + 1;
  const year = jsDate.getFullYear();

  return `${day} ${monthNames[month]} ${year}`;
}

export function isUrl(str) {
  var regexp =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;
  return regexp.test(str);
}

export function debounce(fn) {
  let queued = null;
  return [
    (...args) => {
      if (queued) cancelAnimationFrame(queued);
      queued = requestAnimationFrame(fn.bind(fn, ...args));
    },
    () => {
      cancelAnimationFrame(queued);
    },
  ];
}

export function currencyFormat(num) {
  try {
    return "Rp" + num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  } catch (_) {
    return "";
  }
}
