# Mohammed Tousib Hasnat — Portfolio

A minimalist, single-page portfolio site.

## File structure

```
portfolio/
├── index.html        # all page content
├── css/
│   └── style.css     # all styling
├── js/
│   └── script.js     # typewriter effect + active nav highlighting
└── README.md
```

## Before you publish

Update these placeholders in `index.html`:
- Bio text (in the `#about` section)
- Project descriptions/links (in the `#projects` section)
- Email address (in the `#contact` section, currently `your@email.com`)
- GitHub / LinkedIn / Instagram links (currently `href="#"`)

## Deploy with GitHub Pages (free)

1. **Create a repo** on GitHub. You can name it anything (e.g. `portfolio`), or
   name it `your-username.github.io` if you want it at the root of your GitHub domain.

2. **Push this folder to the repo:**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

3. **Enable Pages:**
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to `Deploy from a branch`
   - Set **Branch** to `main` and folder to `/ (root)`
   - Click **Save**

4. **Wait 1–2 minutes**, then your site will be live at:
   - `https://your-username.github.io/your-repo/` (normal repo), or
   - `https://your-username.github.io/` (if the repo is named `your-username.github.io`)

That's it — every time you `git push` after editing files, the live site updates automatically.
