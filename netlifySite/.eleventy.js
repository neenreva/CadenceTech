module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/styles/style.css');
  

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
