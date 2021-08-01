const mapPageHandler = {
  name: "maps page",
  pattern: "/maps/",
  priority: 20,
  func: ({ state }) => {
    state.source.data["/maps/"].isMapPage = true;
    state.source.data["/maps/"].isReady = true;
  },
};

export { mapPageHandler };
