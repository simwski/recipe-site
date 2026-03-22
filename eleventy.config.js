import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");

  const md = markdownIt({ html: true }).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", md);
}