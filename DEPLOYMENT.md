# 🚀 Netlify Deployment Checklist

## Pre-deployment Checklist

### ✅ Code Preparation
- [ ] All features are complete and tested
- [ ] Code is committed to GitHub repository
- [ ] No sensitive data in code (API keys, passwords, etc.)
- [ ] All images are optimized and in the `public/` folder
- [ ] Update contact information in the website
- [ ] Test the build locally with `pnpm build`

### ✅ Configuration Files
- [ ] `netlify.toml` is configured (✅ Already included)
- [ ] `next.config.mjs` has static export settings (✅ Already included)
- [ ] `package.json` has correct build scripts (✅ Already included)

## Deployment Steps

### Option 1: GitHub Integration (Recommended)

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Netlify Setup**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your repository

3. **Build Settings**
   ```
   Build command: pnpm build
   Publish directory: out
   ```

4. **Environment Variables** (if needed)
   ```
   NODE_VERSION = 18
   NEXT_TELEMETRY_DISABLED = 1
   ```

### Option 2: Manual Deploy

1. **Build Locally**
   ```bash
   pnpm build
   ```

2. **Deploy**
   - Drag and drop the `out` folder to Netlify

## Post-deployment Tasks

### ✅ Verification
- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images display properly
- [ ] Forms work (if any)
- [ ] Mobile responsiveness
- [ ] Cross-browser testing

### ✅ SEO & Performance
- [ ] Add custom domain (optional)
- [ ] Set up redirects (if needed)
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test site speed with PageSpeed Insights
- [ ] Verify meta tags and social sharing

### ✅ Maintenance
- [ ] Set up automatic deployments from main branch
- [ ] Configure branch previews for testing
- [ ] Set up form notifications (if using contact forms)
- [ ] Monitor site performance and uptime

## Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check for TypeScript errors
- Review build logs in Netlify dashboard

**Images Not Loading**
- Ensure images are in `public/` folder
- Check image paths (use `/image.jpg` not `./image.jpg`)
- Verify image file names match exactly (case-sensitive)

**404 Errors**
- Check `netlify.toml` redirects configuration
- Verify Next.js routing setup
- Ensure static export is configured correctly

**Slow Loading**
- Optimize images before upload
- Check for large dependencies
- Review Netlify Analytics for bottlenecks

## Helpful Commands

```bash
# Test build locally
pnpm build && pnpm start

# Check build output
ls -la out/

# Netlify CLI commands
netlify status
netlify open
netlify logs
```

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Netlify Community Forum](https://community.netlify.com/)
- [GitHub Issues](https://github.com/Pavan19047/ngo-website-frontend/issues)

---

Happy deploying! 🎉
