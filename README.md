# TaskFlow SaaS

A modern, responsive SaaS landing page built with React and custom CSS.
The project presents a polished product experience through a hero
section, feature highlights, an interactive-style demo, workflow steps,
testimonials, pricing plans, FAQs, and calls to action.


## Overview

TaskFlow SaaS provides a polished landing page experience for an AI-focused SaaS product. 
It features a minimalist visual identity, a green-accented color palette, 
reusable React components, and responsive layouts designed to present product information in a clear and engaging way.

The application is organized into modular sections, making the interface easier to maintain, customize, and extend.

The main application renders the page sections in this order:

1.  Navigation bar
2.  Hero
3.  Trusted companies
4.  Features
5.  Demo
6.  How it works
7.  Testimonials
8.  Pricing
9.  FAQ
10. Call to action
11. Footer

## Features

-   **Responsive navigation** — Provides a structured navigation experience with mobile-friendly styling.
-   **Modern Hero Section** — Introduces the product with a clear headline, supporting content, and calls to action.
    preview.
-   **Trusted companies section** — Displays social proof through company names or brand references.
-   **Feature Highlights** — Presents the product's key capabilities using reusable card layouts.
-   **Interactive Demo section** — Showcases a sample AI-style interface and product workflow.
-   **How it works section** — Explains the product experience through a step-by-step layout.
-   **Testimonials** — Displays customer feedback in a structured card design.
-   **Pricing section** — Organizes subscription options and plan features.
-   **FAQ section** — Provides space for answers to common customer questions.
-   **Call to Action (CTA) section** — Encourages visitors to take the next step.
-   **Structured Footer** — Provides additional navigation and supporting information.
-   **Centralized CSS design system** — for colors, spacing, and transitions.
-   **Responsive layouts**  — Uses CSS Grid, Flexbox, and media queries to adapt the interface to smaller screens.
-   **Reusable React components** — organized by page section.

The demo's visual presentation should not be interpreted as proof of a
live AI integration; no API connection is established by the supplied
code.

## Tech Stack

-   **React** --- component-based user interface.
-   **JavaScript (ES6+)** --- application composition and behavior.
-   **CSS3** --- styling, responsive layouts, and visual effects.
-   **Create React App** --- development server and production build
    scripts.
-   **npm** --- dependency installation and script execution.

## Project Structure

``` text
TaskFlow-SaaS-app/
└── src/
    ├── assets/
    ├── components/
    │   ├── Demo/
    │   │   ├── demo.jsx
    │   │   └── generated.jsx
    │   ├── FAQ/
    │   │   ├── faq.jsx
    │   │   └── faqCard.jsx
    │   ├── Features/
    │   ├── Pricing/
    │   │   ├── pricing.jsx
    │   │   └── pricingCard.jsx
    │   ├── testimonials/
    │   ├── button.jsx
    │   ├── cta.jsx
    │   ├── footer.jsx
    │   ├── hero.jsx
    │   ├── howitworks.jsx
    │   ├── logo.jsx
    │   ├── navbar.jsx
    │   ├── secHeader.jsx
    │   └── TrustedCompanies.jsx
    ├── data/
    │   ├── faq.js
    │   ├── features.js
    │   ├── pricing.js
    │   └── testimonial.js
    ├── styles/
    │   ├── normalize.css
    │   ├── all.min.css
    │   ├── global.css
    │   └── MyFramework.css
    ├── App.css
    ├── App.js
    └── index.js
```

### Architecture notes

-   `App.js` composes the main page by importing and rendering each
    section component.
-   `index.js` mounts the React application and imports the global
    stylesheets.
-   `components/` contains the reusable UI sections and smaller
    components.
-   `data/` contains the FAQ, feature, pricing, and testimonial content.
-   `styles/` contains shared stylesheet resources.
-   `App.css` contains page and section styling, including CSS custom
    properties.

The supplied screenshot shows `data/` inside `src/`. The supplied
`App.js` snippet uses imports such as `./components/Features/features`
and `./components/testimonials/testimonials`; check capitalization and
file paths if you reorganize the folders, especially when deploying to a
case-sensitive environment.

## Getting Started

### Prerequisites

Install:

-   [Node.js](https://nodejs.org/)
-   npm (included with Node.js)

### Installation

1.  Clone or download this repository.

    ``` bash
    git clone https://github.com/A-Kandeel/TaskFlow-SaaS-Landing-Page
    ```

2.  Change into the project directory.

    ``` bash
    cd TaskFlow-SaaS-app
    ```

3.  Install dependencies.

    ``` bash
    npm install
    ```

4.  Start the development server.

    ``` bash
    npm start
    ```

5.  Open <http://localhost:3000> in your browser.

The clone URL is a placeholder; replace it with the URL of your actual
repository.

## Available Scripts

  -----------------------------------------------------------------------
  Command                             Description
  ----------------------------------- -----------------------------------
  `npm start`                         Runs the app in development mode.

  `npm test`                          Runs the configured test suite.

  `npm run build`                     Creates an optimized production
                                      build in `build/`.

  `npm run eject`                     Exposes the underlying Create React
                                      App configuration. This is a
                                      one-way operation.
  -----------------------------------------------------------------------

These scripts are the standard scripts described by the supplied Create
React App setup. Confirm they are present in your `package.json`.

## Design System

The CSS uses custom properties to maintain a consistent visual language.
The supplied variables include:

  Variable              Purpose                         Supplied value
  --------------------- ------------------------------- ----------------
  `--main-color`        Soft green surface              `#edf4df`
  `--sec-color`         Secondary dark green/charcoal   `#303630`
  `--accent`            Bright green accent             `#b9f34a`
  `--bg-color`          Main background                 `#f6f6f3`
  `--dark`              Dark text and surfaces          `#151617`
  `--text-color`        Secondary text                  `#656a68`
  `--line`              Borders and dividers            `#e2e3de`
  `--section-padding`   Standard section spacing        `100px`
  `--main-transition`   Shared transition duration      `0.3s`
  `--letter-space`      Shared letter spacing           `1.35px`

These variables are shown in the supplied CSS excerpt. Update the
relevant stylesheet in the project to change the palette or spacing
consistently.

## Customization
### You can customize the project by modifying the following areas:

-   **Page content:** Update the text, labels, testimonials, and pricing information inside the relevant components.
-   **Features:** Update `src/data/features.js` and the Features
    component.
-   **Pricing:** Update `src/data/pricing.js` and the Pricing
    components.
-   **FAQs:** Update `src/data/faq.js` and the FAQ components.
-   **Testimonials:** Update `src/data/testimonial.js` and the
    testimonials components.
-   **Colors and spacing:** Adjust the CSS custom properties in the
    stylesheet where `:root` is defined.
-   **Page order:** Add, remove, or reorder components in `App.js`.
-   **Navigation and calls to action:** Update the links and button
    behavior in their corresponding components.

## Production Build

Create a production build with:

``` bash
npm run build
```

Create React App outputs the optimized build to the `build/` directory.
Deploy that directory using a static hosting service compatible with
React single-page applications.

## Possible Next Steps

Depending on the intended product scope, future improvements could
include:

-   Connecting the demo to a real API if live generation is required.
-   Adding authentication and account management.
-   Connecting pricing plans to a subscription or payment provider.
-   Adding automated tests for key components and interactions.
-   Reviewing keyboard navigation, semantic HTML, and accessible labels.

These are potential enhancements, not claims about features currently
implemented.

## Contributing

If you plan to accept contributions:

1.  Fork the repository.
2.  Create a feature branch.
3.  Make your changes.
4.  Run the available tests and build.
5.  Open a pull request describing your changes.

## License

No license information was included in the supplied project details. Add
a `LICENSE` file and update this section before distributing the project
publicly.

------------------------------------------------------------------------

Built with React and custom CSS.
