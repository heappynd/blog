export default {
  paths() {
    return [
      { params: { pkg: "foo" }, content: `<span style="color:red">foo</span>` },
      { params: { pkg: "bar" }, content: `# 3` },
    ];
  },
};
