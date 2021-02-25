const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\pages\\index.js"))),
  "component---src-template-archive-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\template\\archive.js"))),
  "component---src-template-blog-details-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\template\\blog-details.js"))),
  "component---src-template-category-post-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\template\\category-post.js"))),
  "component---src-template-project-details-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\template\\project-details.js"))),
  "component---src-template-tag-template-js": hot(preferDefault(require("C:\\Users\\corya\\Documents\\Lambda\\Portfolio\\Portfolio\\src\\template\\tag-template.js")))
}

