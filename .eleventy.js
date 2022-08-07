module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets/");
  
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };