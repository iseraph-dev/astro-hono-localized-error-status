# Localized `/pt/404` is HTTP 200

`astro@7.4.0-beta.1`, `@astrojs/cloudflare@15.0.0-beta.1` (`next` @ `3cf4719924`).

`getDefaultStatusCode()` runs only in `render()` inside `handleRequest`. It treats `/pt/404` as 404 through `isLocalizedErrorRoute`. `pages()` leaves `FetchState.status` at 200. `renderPage` forces 404 and 500 only for `/404` and `/500`, so a root `src/pages/404.astro` is still HTTP 404 on this path. `/pt/404` is outside that check.

`routing: 'manual'` turns off locale redirects, so the status comes from rendering the page.

## Observed

`GET /pt/404` is **200**. The status text is `OK`. The body contains `PT-404`.

## Control

`astro()` or `App.render` of the same URL is **404**, with the same HTML. A root `src/pages/404.astro` does not show this bug.
