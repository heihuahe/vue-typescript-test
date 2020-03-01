module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"]
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        librayName: 'elemnet-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
};
