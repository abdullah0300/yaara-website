# Yaara — Good company. Clear money.

Buildless, responsive marketing site for Yaara's native shared-finance pilot.

- `dist/index.html`: full landing page
- `dist/style.css`: responsive layouts, chapter motion, reduced-motion support
- `dist/app.js`: expense storytelling, split calculator, accessible tabs, mobile navigation, disclosure dialog
- `dist/design-notes.html`: seven official award references and section-by-section interpretation
- `dist/assets/`: supplied branding, original generated lifestyle image, local licensed fonts

Serve `dist/` as static files. No dependencies or build step required. Site identity and static output live in `.openai/hosting.json`.

## Product source

The user supplied the Yaara branding ZIP and a research pack dated 23 October 2026. The latter describes the pilot and product boundaries. Actual app source/screenshots were not supplied. The expense walkthrough uses illustrative records. The hero uses editorial typography and original generated photography. Store URLs and pricing are intentionally unconfirmed.

## Verification

Desktop browser at 1363 CSS pixels and a 390-pixel iframe viewport (375-pixel content area with browser scrollbar) inspected. No horizontal mobile overflow. Checked all loaded images and fonts, JavaScript syntax, local asset paths, unique IDs and bundled font licenses.

Checked calculator equal split of PKR 100 (33.34, 33.33, 33.33), invalid percentages, valid 60/20/20 percentage shares, exact sum mismatch, and reset to equal PKR 6,000. Invalid/over-limit totals are guarded before allocation; calculations use integer paise and deterministic remainder allocation.

Checked story chapter switching and the PKR 1,000 remaining partial repayment; mobile menu opening/dismissal; audience tabs and arrow-key switching; FAQ disclosure; preview modal open/close; motion toggle. Browser extension metadata errors were present, with no site application errors observed.

The page uses native scrolling and honours system reduced-motion preferences. Motion can also be disabled in the footer. Calculator values are not stored or transmitted.

## Remaining launch inputs

Replace conceptual interface visuals with actual app screenshots if needed. Supply verified store URLs, release/pricing details, and approved privacy/terms documents before a public acquisition launch. The current CTA demonstrates the split workflow without promising downloads or submitting fake waitlist registrations.

## Hero revision

Replaced the original phone-and-transaction-card hero with oversized staggered “Yours. Mine. Ours.” typography, a portrait of friends, a folded lime backing and a circular chapter link. Added a dedicated `dist/hero.css` and optional scroll-linked type/image motion. Other landing-page sections are unchanged. Desktop and mobile layouts and the hero chapter link checked.

## Spacing and loose-ends revision

Reduced hero top padding and the gap before its headline across desktop/tablet/mobile. Desktop checked at 15px between the navigation bottom and hero intro. Replaced the plain Sound familiar statement with a navy editorial section, tangled SVG thread, scattered conversational fragments, and a reversible keyboard-accessible button that gathers them into one record. CSS path transitions honour reduced motion; state is announced through aria-live. Uses overflow:clip to avoid an internal scroll container when the button receives focus. Desktop and 375px mobile content widths checked.

## Automatic thread motion

Removed the thread button. The illustration now waits until at least 35% is visible, shows the tangled state for 1.8 seconds, then untangles and holds the clear state before repeating. Timers pause outside the viewport or in a hidden tab. Reduced-motion mode shows the clear state without animation. Decorative cycling is hidden from assistive technology so it does not repeatedly announce changes.

## Expense-story refinement

Restored the original “From ‘I’ve got this’ to ‘got it, thanks.’” headline, three scroll chapters, and sticky visual. Refined the typography, chapter rail, paper layers, spacing, and reveal transitions in `dist/story-polish.css`. The receipt, equal split and partial repayment retain their original copy and arithmetic. The automatic thread section remains unchanged.

## People section composition

The original generated photographs and three use-case stories now form one expanding photographic sequence. Desktop keeps all three image windows visible; selecting or hovering a scene expands it, introduces its overlaid headline, and updates the explanation below. Keyboard arrow/Home/End navigation is retained. Mobile stacks the images as one expanded scene with two compact photographic ribbons. The headline, photograph sizing, saturation, and supporting copy have coordinated transitions; both system reduced-motion preference and the page motion toggle disable those transitions. Other page sections remain unchanged.

References revisited: Awwwards' official Rhythm of Nature entry (immersive storytelling), Opal Camera Inc. entry (parallax and responsive design), and Organimo Product Benefits Experience element (scroll experience and information overlay). The photographic sequence is an original translation of these principles, not a reproduction of a reference layout.

## FAQ refinement

Restored the approved expanding photographic sequence from source commit `6c1463c31dfd19f5558ceea94a2be2369898dbfb`, including its exact markup, stylesheet and JavaScript. Redesigned only the FAQ as a full-width editorial question index with larger typography, a cobalt active answer, a lime open/close control and animated content expansion. Native details/summary retains keyboard operation and a shared name keeps one answer open. All six questions and answers are preserved. Desktop, mobile width and keyboard operation checked.

## Split workspace refinement

Reworked the cobalt calculator section as a full-width interactive proportion study. Retained its headline, expense input, three people, and equal/percentage/exact modes. Removed the chapter kicker, decorative fractions, handwritten prompt, and tilted card. A lime/lavender/ivory strip now animates each actual share of the total; zero shares collapse, very narrow labels are hidden, and invalid splits clear the visual until corrected. Existing validation and integer-paise arithmetic remain intact. Checked 50/30/20 percentage amounts, invalid percentages, exact splits with zero shares, and PKR 100 rounding to 33.34 + 33.33 + 33.33. Mobile width is 375px without overflow.

## Discoverable calculator interaction

Added an explicit invitation, a visibly bordered expense input with an edit cue, filled/outlined split-method buttons, and boxed share inputs. The proportion strip now contains a real range control with a visible grip; pointer, touch and keyboard input set the user's percentage and distribute the remaining percentage between the other two people according to their existing ratio. A one-click 50/30/20 example offers an obvious starting action. Existing equal/exact modes and total validation are retained. Verified the preset, pointer click, arrow keys, 0/100 percent limits, mobile width and live totals.

## Light split palette

Changed only the split section palette to pale sage with dark text, ivory inputs and cobalt accents. Rebalanced control borders, hover/focus states, share fields, validation text and supporting copy for the light background. Layout and calculator JavaScript remain unchanged. Desktop contrast and control appearance checked visually.

## Footer refinement

Replaced the dark footer with a light editorial colophon: a two-line brand signoff, four working section links, a circular back-to-top control, and a large linked cobalt wordmark with individual letter hover movement. The about-preview dialog and motion toggle remain available. Mobile uses a two-column link directory and stacked bottom controls. Navigation is layered above the wordmark to keep hit areas clear. Desktop and 375px mobile composition checked; the preview dialog and FAQ navigation link verified.

## Walkthrough right-side ledger

Replaced the small nested receipt cards with a large editorial ledger. The expense is displayed as one bold amount; animated branches connect it to three equal shares; the partial repayment uses a half-filled track with returned and remaining balances. All original example values remain: 6,000 total, 2,000 each, 4,000 owed, and Ayesha's 1,000 repayment leaving 1,000 of her original 2,000 share. The existing left-side story, headline and scroll chapter selection remain unchanged. Labeled Add/Split/Repay controls replace the anonymous chapter marks. Reduced-motion preferences remove the new animations.

## Section order

Moved the complete “Keep the good bits” region after the three-step expense walkthrough and before the interactive split calculator. Its markup and automatic thread animation are unchanged.

## Yaara for students

Added `dist/students.html`, with locally bundled original campus-lunch and group-project photographs, the existing typography and light cobalt/lime/ivory identity, a responsive hero, sticky chapter index, lunch example, project costs, shared-flat routines, partial personal-loan repayment, weekend plans, availability questions, closing and shared footer. The main navigation and footer link to the new page.

The project-budget demo accepts three costs, lets visitors choose up to four people, validates empty/negative/out-of-range inputs, and distributes integer paise equally without losing the total. The repayment example records an illustrative 300 against a 1,000 loan and can be reset. All demos run locally, move no money, and make no claims about student pricing or public release availability. Motion controls share the existing preference.

Checked desktop hero and interaction layouts, 375px mobile width and editing, four-person totals (3,900 / 4 = 975), 100 split three ways (33.34 / 33.33 / 33.33), no-participant and invalid-cost errors, reset, and 300 returned / 700 remaining.


## Partners story page
`dist/partners.html` follows two friends opening a print studio: first bills, automatically drawn shared ledger, editable costs/payers and percentage split, partial repayment, FAQs and shared footer. Uses two original generated editorial photos and the established ivory/cobalt/lime palette. Browser-verified at desktop and 375px content width; main navigation checked at 900px. Integer-paisa calculation covers unequal shares, payer changes, zero balance and invalid cost states. Repayment example returns 400 of 1,000, leaving 600. Navigation, FAQ, preview dialog and reduced-motion control checked. Existing homepage and students sections retained, with new partner links.


## Shared navigation redesign
The home, students and partners pages now share identical header markup and `navigation.css` / `navigation.js`. Audience links live in a photographic Made for panel, with a current-page indicator. Mobile uses an expandable full-height menu with background scroll locking, inert page content, focus wrapping and Escape closing. Desktop supports click-outside, Escape and closing when focus leaves. Motion respects system and saved page preferences.
Validated desktop routes between all pages, shared CTA to the homepage split, menu states, current-page indicators, mobile keyboard wrap and restored background interaction. Visually reviewed at 1348px, 885px, 375px and 305px content widths without horizontal overflow.


## Travel with friends
`dist/travel.html` follows one illustrative three-person road trip: booking the stay, the road and chai stop, selecting activity participants, reviewing the trip, and recording a partial repayment. The route story advances while visible, with pause/play and keyboard-operable tabs; reduced motion disables automatic changes. Three original generated photos are stored in `dist/assets/travel-*.webp`, with prompts in ASSET-PROMPTS.md.
Activity calculations use integer paisa and distribute any rounding remainder explicitly. Checked defaults (4,500 / 2 = 2,250), all three friends (1,500 each), a 100 / 3 rounding case (33.34 + 33.33 + 33.33), no selected participants, invalid empty cost and a 1,000,000 cost at 305px content width. Trip totals: 9,000 + 6,000 + 900 = 15,900; equal shares 5,300; Hamza owes you 3,700 and Ayesha 700. The separate repayment example records 1,000, leaving 2,700.
Browser QA covered desktop, tablet and phone layouts, automatic story progression, pause/play, reduced motion, FAQ behavior, preview information, and homepage Made for → travellers routing. Shared header identical on all four pages.


## Housemates page
`dist/housemates.html` follows one illustrative household month through groceries, internet and supplies. Warm original photography and a staged timeline introduce an interactive equal/exact expense split, a recurring draft → review → sample recording sequence, a month-end record and partial repayment. Shared navigation now includes four audience destinations, with compact photographic rows on tablet.
Validation: equal 6,000 / 3 = 2,000; two participants = 3,000 each; own-share-only and no-participant states; exact preset 3,000 / 2,000 / 1,000; 500 under- and over-assignment; empty cost error; 100 / 3 rounded to 33.34 + 33.33 + 33.33. The draft review displays three 1,000 shares, records only after review and blocks invalid amounts. Monthly costs 6,000 + 3,000 + 1,500 total 10,500, with equal shares of 3,500; Ayesha owes you 500 and Hamza owes you 2,000. Recording 500 leaves 1,500.
Browser QA covered desktop, tablet, 375px and 305px content widths, including a large 1,000,000 expense without horizontal overflow. Checked mobile agreed-share controls, FAQ, preview dialog, reduced-motion visibility, shared audience current-page marker and homepage → housemates navigation.


## Housemates information-first revision (current page)
The housemates page now focuses on recognisable problems, solutions and practical guidance. Calculators, editable shares, recurring bill sample recording and repayment controls are removed from both markup and JavaScript. Preserves the original hero, two photographs, animated month timeline, fixed worked example, shared navbar, FAQs and footer. Adds expense-specific situations, recurring-bill checks, four household agreements, an explanatory partial repayment story and eight direct FAQs. Reader navigation, stronger text contrast, descriptive metadata, self-canonical URL, Open Graph metadata and WebPage JSON-LD support a readable, discoverable page. Important content is in the HTML; no special AI markup or search-ranking guarantees.
Search guidance consulted: https://developers.google.com/search/docs/appearance/ai-features and https://developers.google.com/search/docs/fundamentals/creating-helpful-content . These recommend useful textual content and normal SEO fundamentals. Existing owner-private hosting is preserved, so public indexing remains dependent on future public access.
Validation: node syntax check; no form/input/select/output/button in main; no demo prompts/handlers; unique IDs, local assets, anchor destinations and valid JSON-LD. Shared header remains identical across five pages. Desktop, tablet and mobile reviewed; native FAQ and guide anchor navigation checked.


## Friends information page
`dist/friends.html` follows everyday friendship through after-class lunches, unequal restaurant orders, a ride shared by two people, separate friend groups, a birthday gift and a personal loan with a partial repayment. Original editorial photography, large typography, light backgrounds, an automatic drawn thread and reduced-motion support maintain the shared visual language. Main content is informational, with no calculators or transaction controls. Includes practical guidance, eight FAQs, title/description/canonical and WebPage JSON-LD.
Shared navigation now includes friends across all six pages. Browser-reviewed desktop, 885px and 375px layouts without horizontal overflow; verified images, current-page navigation and FAQ opening. Fixed examples checked: 1,800 / 3 = 600; 3,000 / 3 = 1,000; 1,500 - 500 = 1,000. Local links/assets, unique IDs, matching headers and script syntax validated.


## Couples information page and six-story directory
`dist/couples.html` introduces shared everyday costs, agreed unequal shares, groups for plans, and partial repayments through editorial stories. Two original generated photographs, light ivory/lavender/peach/lime backgrounds, large typography, automatic share illustration and reduced-motion support. No calculators or transaction controls. Eight FAQs, canonical metadata, Open Graph and WebPage structured data. Product claims remain within shared-expense and repayment recording; money transfers take place outside Yaara.
The shared Made for menu now uses a two-column, three-row photographic directory across all seven pages. Business partners is labelled distinctly from couples. Mobile remains a scrollable directory. Verified image loading, desktop/885px/375px layouts without horizontal overflow, current-page marker, mobile open/select/close, automatic illustration, motion toggle, preview dialog and FAQs. Scripts, local assets, links, IDs and JSON-LD checked. Fixed examples: 5,000 at 60/40 gives 3,000/2,000; 2,000 minus 800 leaves 1,200.


## Friends and couples content strategy update
Both audience pages now expand familiar problems into practical advice and a specific explanation of how Yaara records the costs. Friends covers school/college/university meals, restaurants, partial participation, project materials/printing, birthday contributors, groups and personal loans. Couples covers mixed grocery bills, taking turns paying, personal versus shared spending, different agreed shares, separate plans and partial repayments. Expanded existing guidance and FAQs (11 friends, 12 couples), clarified definitions and updated matching description/Open Graph/JSON-LD copy. Preserved the approved layouts, imagery, automatic motion and shared header. No calculators, transaction controls or new app capabilities added.
Validated local links/assets, IDs, JSON-LD, one main heading, informational main and seven matching headers. Reviewed desktop and 375px/885px content widths, the new project row and expanded FAQ answers. Existing examples retain correct arithmetic.


## Travel and business partners information-first revision
Travel now explains Yaara trip groups, payers, per-expense participants, optional activities, unequal meals, later arrivals, trip review, partial repayments, offline sync and separate currencies. Business partners now explains shared purchase groups, receipts, per-expense agreements, separate projects and repayment review. Replaced editable calculators and sample repayment buttons with editorial scenarios, guidance and fixed illustrative records. Kept the photographic story, automatic route story with accessible pause/tabs, animated ledger, approved light palette and seven-page shared navigation. Added 10 travel FAQs and 11 business-partner FAQs, matching description/Open Graph metadata, canonical URLs and WebPage JSON-LD. Business content remains about shared expenses and repayments; no ownership/capital/profit features promised.
Checked JS syntax, local assets/anchors, IDs, structured data, matching headers and removal of form controls/calculator handlers. Desktop/885px/375px layouts reviewed; image loading, FAQs and preview information checked. Illustrative amounts: 4,500 / 2 = 2,250; 3,700 - 1,000 = 2,700; 1,000 - 400 = 600.


## Homepage paired product portrait
Added two inward-facing, rounded phone frames at the bottom centre of the editorial hero. Precise HTML previews show a Yaara-branded home overview and a trip-group expenses screen, with layered metal edges, camera islands, screen glass, shadows and a quiet connecting curve. One automatic entrance and a restrained scroll lift respect system and saved reduced motion. Preserved the existing poster, rooftop portrait, shared navigation and downstream sections; anchored the existing CTA to its portrait.
The supplied Yaara-App-Assets.zip contains branding and splash resources, not app screenshots. These are clearly labelled illustrative previews with sample records, not captures of the shipped app. Screens use existing brand assets and supported feature concepts; no new product capabilities are implied.
Reviewed Awwwards Revolut product reference (https://www.awwwards.com/inspiration/revolut-one-app-all-things-money) and To The Moon Mobile features reference (https://www.awwwards.com/inspiration/mobile-app-features-to-the-moon-mobile) for product emphasis, depth and restrained motion. Composition and implementation are original to Yaara.
Validated desktop, 885px, 375px and 305px layouts, complete phone visibility, content fitting above screen navigation, motion off/on, automatic entrance and CTA navigation. No interactive app controls inside the illustrative devices. Local assets/anchors, unique IDs, script syntax and seven matching headers checked.


## Illustrated homepage feature gallery
Added a four-panel feature overview immediately after the paired-phone hero, before the existing life story. The supplied reference informed the illustration/copy pairing and generous rounded panels; artwork is original. Panels cover recording and splitting shared expenses, friend groups and per-expense participants, personal loans and partial repayments, and shared activity/notifications for connected friends involved in records. Four built-in generated illustrations are bundled as optimized `dist/assets/feature-*.webp`, with complete prompts in ASSET-PROMPTS.md.
Uses the established ivory, pale lime and cobalt palette, large sans/serif headings, one-time staggered reveals, illustrated masks and restrained hover motion. Stacked mobile layouts retain readable copy and large illustrations. Motion respects system and saved preferences. Links lead to the existing workflow, friend groups, loans and FAQs; no simulated app controls.
Validated section order, four original assets, local links/anchors, unique IDs, seven matching headers and script syntax. Visually reviewed desktop, 885px and 375px layouts without horizontal overflow. Verified image loading, loan anchor and reduced-motion rendering.
