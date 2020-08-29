module.exports = {
  distDir: "build",
  exportPathMap: function () {
    return {
      "/": {
        page: "/",
      },
      "/add": {
        page: "/add",
      },
      "/list": {
        page: "/list",
      },
      "/mypage": {
        page: "/mypage",
      },
      "/api/add": {
        page: "/api/add",
      },
      "/api/search": {
        page: "/api/search",
      },
    };
  },
};
