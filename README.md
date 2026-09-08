# WEDDFOLIO

Premium editorial homepage for WEDDFOLIO, built as a statically exportable React site.

## Publish with GitHub Pages

1. Create an empty GitHub repository.
2. Add that repository as this project's `origin` and push the `main` branch.
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.

Every push to `main` will build and publish the site automatically. The workflow supports both project URLs such as `username.github.io/weddfolio` and root URLs such as `username.github.io`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is generated in `dist/client`.

## Replacing media placeholders

The reusable `EditorialMedia` component is in `app/page.tsx`. Replace its gradient background with the final photography or video source while retaining each container's sizing and accessible label.
