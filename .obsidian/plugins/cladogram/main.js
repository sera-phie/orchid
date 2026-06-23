const { Plugin, MarkdownRenderer } = require('obsidian');

module.exports = class EasyCladogramPlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("cladogram", async (source, el, ctx) => {
      // Create the container div with our custom CSS class
      const container = el.createEl("div", { cls: "easy-clade-container" });
      
      // Use the official MarkdownRenderer to process the text and links
      await MarkdownRenderer.renderMarkdown(
        source,
        container,
        ctx.sourcePath,
        this
      );
    });
  }
};