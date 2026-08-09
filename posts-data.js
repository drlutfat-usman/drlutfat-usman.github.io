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
    slug: "measurement-problem-enhanced-rock-weathering",
    date: "2026-08-09",
    tag: "Climate & Carbon Science",
    title: "The Measurement Problem in Enhanced Rock Weathering: A Five-Phase Framework",
    excerpt: "Verified carbon removal credits sell for hundreds of euros a tonne. Here's the chain of measurement and modelling — and the honest gaps in it — that number actually rests on.",
    body: `
<p>Enhanced rock weathering (ERW) is one of the most credible nature-based carbon removal strategies available today — crushed silicate rock, spread on soil, accelerates a chemical weathering process that would otherwise take geological time, converting atmospheric CO2 into stable carbonates while releasing nutrients back into the soil. Verified ERW credits already trade at €200–500 per tonne, among the highest prices in the carbon removal market. But the number that gets sold to a buyer and the number that actually happened in the ground are connected by a chain of measurement and modelling that most people never look at closely. I did, recently, and it changed how I think about what "verified" should mean.</p>

<h2>Five phases, only three of them measured</h2>
<p>CarbonPlan's public quantification framework breaks the ERW carbon pathway into five phases: rock application, initial weathering, field processes, watershed transport, and ocean storage. The first three can be directly measured — mineralogy characterized before deployment, cation release and alkalinity tracked in the weeks after, soil chemistry and greenhouse gas flux followed over the following seasons. The last two — how weathering products move through a watershed, and how long the resulting carbon actually stays locked away in ocean storage — are, by necessity, modelled rather than measured. No project developer is tracking an individual calcium ion from a field in Brazil to the ocean floor.</p>

<p>This isn't a flaw specific to any one company. It's a structural fact about the science. The honest question is not "is this project modelling something?" — every project is, at phases four and five. The honest question is whether the model has been validated against independent field data, and whether that validation is stated plainly rather than blurred into the same confident language used for the directly measured phases.</p>

<h2>The biological variable most MRV plans underweight</h2>
<p>The other thing worth knowing: weathering rate is not a fixed geochemical constant. Recent multi-omics field studies — metatranscriptomic and metagenomic profiling of soil microbiomes on basalt grains — show that microbial communities significantly upregulate siderophore biosynthesis in response to rock powder, measurably accelerating mineral dissolution beyond what abiotic geochemistry alone predicts. Two identical rock powder treatments, on two soils with different microbiomes, can weather at meaningfully different rates. Most current MRV frameworks treat this as unmodelled noise rather than a predictable, and eventually optimizable, signal.</p>

<h2>What good MRV actually requires</h2>
<p>Having spent real time in this literature, the rigor I'd look for in any ERW monitoring plan comes down to four things:</p>
<p><strong>A genuine baseline.</strong> Additionality has to be demonstrated against an actual untreated control, not a purely modelled counterfactual.</p>
<p><strong>Conservative crediting under uncertainty.</strong> When a measurement falls within a range, credits should be issued at the lower bound, not the midpoint.</p>
<p><strong>A clear measured/modelled boundary.</strong> The report should say, in plain language, which numbers came from an instrument and which came from a model — and carry the model's numbers with appropriately wider uncertainty.</p>
<p><strong>Longitudinal tracking, not a single snapshot.</strong> Weathering is a multi-year process. Crediting that front-loads Year 1 projections misrepresents a process that is, by nature, still unfolding.</p>

<p>The carbon removal market is scaling fast, partly driven by AI infrastructure's own energy footprint — Microsoft alone has signed removal deals in the hundreds of thousands of tonnes, much of it to offset data center growth. That scale makes measurement rigor a bigger question than it was five years ago, not a smaller one. A market this size can't run on trust in a company's own narrative section. It has to run on the same discipline I'd want from any dataset: show me what you measured, show me what you modelled, and don't let the two quietly become the same sentence.</p>
    `
  },
  {
    slug: "reviewing-international-consortium-proposals",
    date: "2026-08-09",
    tag: "Reviewer Notes",
    title: "What I Look For When Reviewing International Research Consortium Proposals",
    excerpt: "Notes from reviewing large, multi-country research consortium proposals — and why the same discipline applies to reading a proposal, a dataset, or my own draft manuscript.",
    body: `
<p>Over the past few weeks I worked through full, criterion-by-criterion reviews of two large, international, multi-country research consortium proposals — the kind submitted to funders like the Belmont Forum, where five or more countries, a dozen-plus institutions, and several national funding agencies all have to align behind one document. I can't discuss the specific proposals — that would breach the confidentiality any reviewer owes the applicants — but the patterns I found, and the framework I used to find them, are worth writing down. They turned out to be the same discipline I already use in my own research: separate what is measured from what is claimed, and never let the two blur together.</p>

<h2>Scientific quality is not the same as scientific ambition</h2>
<p>Almost every proposal I read was ambitious. Far fewer stated, in a single clear sentence, exactly what unresolved question they were closing. Ambition is cheap to write; a sharp, falsifiable research question is not. The strongest sections weren't the ones promising the most — they were the ones that said, specifically, "this has never been measured before, here is how we will measure it, and here is what result would prove us wrong."</p>

<h2>International collaboration has to be demonstrated, not just plausible</h2>
<p>A consortium spanning five countries can look impressive on a title page and still be, underneath, five researchers who found each other through a funding call rather than through years of shared work. The honest tell is evidence of an <em>existing</em> relationship — a joint prior grant, a shared dataset, a co-authored paper — versus a consortium built purely on complementary CVs. Both can produce good science. Only one has already been tested under pressure.</p>

<h2>Transdisciplinarity is visible in who signs the document</h2>
<p>The proposals that treated non-academic partners as genuine co-authors — named, with defined roles, present from the first page — read differently from the ones that mentioned "stakeholder engagement" as an activity performed on communities rather than with them. This is checkable in about thirty seconds: look at the personnel list, and see who is missing.</p>

<h2>The budget tells you what a project actually believes about itself</h2>
<p>Line items are a confession. A proposal that claims deep, equal partnership across four countries but concentrates 80% of the budget and decision-making authority in one is telling you something truer than its own narrative section. I learned to read budgets before re-reading the abstract a second time.</p>

<h2>Data management plans are where good intentions get tested</h2>
<p>Almost everyone commits to "open data" and "FAIR principles" in a sentence. Far fewer specify who is actually responsible for maintaining the infrastructure five years after the grant ends, or what happens to sensitive data collected from vulnerable communities. A data management plan with a named person, a named repository, and a named budget line is a real plan. One without those three things is a paragraph of good intentions.</p>

<p>None of this is unique to reviewing grant proposals. It's the same question I ask of a differential expression result, a soil sample, or my own draft manuscript: is the claim backed by something I could independently check, and is the uncertainty stated honestly, or has it been quietly smoothed over? Reviewing other people's work at this scale turned out to be excellent practice for being more honest about my own.</p>
    `
  },
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
