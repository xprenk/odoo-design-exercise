# Odoo Design Exercise

A Vite-powered static site using Bootstrap 5 (SCSS and JS), and custom SCSS utilities.

## Tech stack

- Vite
- Bootstrap 5.3 (SCSS compiled with Sass, JS imported with ES modules)

## Scripts

- `npm run dev` – Start the dev server
- `npm run build` – Build for production to `dist/`
- `npm run preview` – Preview the production build

## Structure

- `src/index.html` – Entry HTML that includes Handlebars partials
- `src/scss/styles.scss` – Bootstrap imports, theme variables, and custom utilities
- `src/js/main.js` – Bootstrap JS imports and custom JS (awards carousel, back-to-top button, mobile menu)

## Notes

- The design by itself is already very solid, the main focus was trying to match the design as closely as possible using Bootstrap's grid and utility classes, with minimal custom CSS and changes.
- The contrast between text and background colors could be improved for better accessibility, for example, the hero section background is a little too bright compared to the white text, the small badges in the next sections also have low-ish contrast. But it still does the job with an AA (and sometimes AA Large) rating.
- I love those seams going from a section to another :)
