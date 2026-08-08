// ============================================
// Lutfat Abimbola Usman — personal site
// Blog posts data file
//
// TO ADD A NEW POST: copy an object below, change
// the fields, and add it to the TOP of the array.
// slug = the URL-safe id (letters, numbers, dashes only)
// date = "YYYY-MM-DD"
// tag  = one short category label
// excerpt = 1-2 sentence teaser shown on the blog list
// body = the full article. Write plain paragraphs;
//        wrap each paragraph in <p>...</p>
//        You can use <h2>...</h2> for a subheading.
// ============================================

const POSTS = [
  {
    slug: "why-i-review-proposals-like-a-multi-omics-dataset",
    date: "2026-08-08",
    tag: "Research Notes",
    title: "Why I Review Research Proposals Like a Multi-Omics Dataset",
    excerpt: "What reviewing large international research consortium proposals taught me about the discipline of translating complex evidence into a clear diagnosis — for a project, or for a patient.",
    body: `
      <p>Every proposal I read has the same underlying question a multi-omics dataset has: is the signal real, or is it noise dressed up in confident language? Reviewing a 130-page international research consortium proposal is not so different from reviewing a differential expression result — you are looking for whether the claim is backed by something measurable, and whether the uncertainty is acknowledged or quietly buried.</p>
      <h2>The pattern I keep finding</h2>
      <p>Strong proposals, like strong datasets, are specific where it matters and honest about what they do not yet know. Weak ones — like poorly controlled experiments — tend to be confident everywhere, including where they should not be.</p>
      <p>This is the same discipline I bring to my own research: state what is measured, state what is modelled, and never let the two blur together.</p>
    `
  },
  {
    slug: "hello-world",
    date: "2026-08-01",
    tag: "Field Notes",
    title: "Starting This Space",
    excerpt: "A short note on why this site exists, and what I plan to write about here.",
    body: `
      <p>This is where I will be writing about the things I am actually working on — multi-omics diagnostics, the translation gap between research and deployable tools, and the slower process of building a research career across three continents.</p>
      <p>More soon.</p>
    `
  }
];
