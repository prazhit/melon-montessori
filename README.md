# Melon Montessori website

Next.js project for https://www.melonmontessori.edu.np/.

## Local setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Restart the development server after changing environment variables.

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dudwbg3qt` is required by the Cloudinary image components. Without it, page rendering fails with “A Cloudinary Cloud name is required”. The cloud name is public; no API key or secret is needed to display existing images. `.env.local` is ignored by Git.

## Updating content

Content is stored in source files rather than a connected CMS:

- `src/pages/index.jsx` selects the homepage implemented by `src/pages/home-2.jsx`.
- `src/components/heros/home-two-hero.jsx` contains homepage slides, text, and background images.
- Follow the imports in `src/pages/home-2.jsx` to find the other homepage sections.
- `src/data/` contains program, class, teacher, gallery, menu, blog, and footer data.
- `src/layout/headers/` and `src/layout/footers/` contain shared site content.
- `src/pages/` contains individual page entry points.

## Production

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dudwbg3qt` in the hosting provider's build environment before building. Public Next.js environment values are included at build time, so rebuild and deploy after changing them.

Local edits do not update the live website automatically. Use the existing site's hosting workflow to deploy reviewed content.
