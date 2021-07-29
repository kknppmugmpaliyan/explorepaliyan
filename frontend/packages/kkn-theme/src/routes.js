const mapPageHandler = {
  pattern: "/maps/",
  func: ({ state }) => {
    state.source.data["/maps/"].isMapPage = true;
  },
};

export { mapPageHandler };
