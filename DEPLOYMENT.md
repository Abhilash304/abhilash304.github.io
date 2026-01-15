# 🚀 Portfolio Deployment Guide

Complete step-by-step guide to deploy your portfolio to the web.

---

## Method 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create account)
2. Click the **"+"** icon in top right → **"New repository"**
3. Repository name: `portfolio` (or any name you like)
4. Description: "My Portfolio Website"
5. Set to **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

### Step 2: Initialize Git and Push Code

Open PowerShell/Terminal in your portfolio folder:

```powershell
# Navigate to portfolio folder
cd B:\Portfolio\portfolio-vanilla

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted for GitHub username and password (use Personal Access Token if 2FA is enabled)

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in left sidebar
4. Under **"Source"**, select **"main"** branch
5. Select **"/ (root)"** folder
6. Click **"Save"**

### Step 4: Access Your Live Site

- Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`
- It may take 1-2 minutes to deploy
- You'll see the URL in the Pages settings

---

## Method 2: Netlify (Easiest - Drag & Drop)

### Step 1: Prepare Your Files

Make sure all your files are in `B:\Portfolio\portfolio-vanilla` folder:
- index.html
- css/style.css
- js/main.js
- assets/ (folder)

### Step 2: Deploy to Netlify

1. Go to [Netlify.com](https://www.netlify.com)
2. Sign up/Login (free account)
3. On the dashboard, find **"Add new site"** → **"Deploy manually"**
4. **Drag and drop** your entire `portfolio-vanilla` folder
5. Wait for deployment (usually 30 seconds)
6. Your site is live! You'll get a URL like: `https://random-name-123.netlify.app`

### Step 3: Customize Domain (Optional)

1. In Netlify dashboard, go to **"Site settings"**
2. Click **"Change site name"** to set a custom name
3. Your new URL: `https://your-custom-name.netlify.app`

### Step 4: Custom Domain (Optional - Free)

1. In Netlify, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (if you have one)
4. Follow DNS configuration instructions

---

## Method 3: Vercel (Great for Continuous Deployment)

### Step 1: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 2: Deploy

```powershell
# Navigate to portfolio folder
cd B:\Portfolio\portfolio-vanilla

# Deploy
vercel
```

### Step 3: Follow Prompts

- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → portfolio (or any name)
- **Directory?** → . (current directory)
- **Override settings?** → No

### Step 4: Access Your Site

- Vercel will give you a URL: `https://portfolio-xyz.vercel.app`
- For production: `vercel --prod`

### Step 5: Connect to GitHub (Optional - Auto Deploy)

1. In Vercel dashboard, go to **"Settings"** → **"Git"**
2. Connect your GitHub repository
3. Every push to GitHub will auto-deploy!

---

## Method 4: GitHub Pages (Using GitHub Desktop - GUI Method)

### Step 1: Download GitHub Desktop

1. Download from [desktop.github.com](https://desktop.github.com)
2. Install and sign in with your GitHub account

### Step 2: Create Repository

1. In GitHub Desktop: **File** → **Add Local Repository**
2. Click **"Choose"** and select `B:\Portfolio\portfolio-vanilla`
3. Click **"Publish repository"**
4. Name it `portfolio` and make it **Public**
5. Click **"Publish repository"**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. **Settings** → **Pages**
3. Source: **main** branch, **/ (root)**
4. Click **Save**

Your site: `https://YOUR_USERNAME.github.io/portfolio`

---

## Quick Comparison

| Method | Difficulty | Speed | Custom Domain | Auto Deploy |
|--------|-----------|-------|---------------|-------------|
| **Netlify** | ⭐ Easiest | ⚡ Fastest | ✅ Free | ✅ Yes |
| **GitHub Pages** | ⭐⭐ Easy | ⚡ Fast | ✅ Free | ✅ Yes |
| **Vercel** | ⭐⭐ Easy | ⚡ Fast | ✅ Free | ✅ Yes |

---

## Before Deploying - Checklist

- [ ] All files are in the correct folders
- [ ] Resume PDF is in `assets/resume.pdf` (if you have one)
- [ ] Test locally - everything works
- [ ] Update EmailJS credentials in `js/main.js` (if using contact form)
- [ ] Check all links work (LinkedIn, GitHub, email)

---

## After Deployment - Next Steps

1. **Test Your Live Site**
   - Check all sections load correctly
   - Test navigation
   - Test project filters
   - Test contact form (if configured)
   - Test on mobile device

2. **Update Social Links**
   - Add your portfolio URL to LinkedIn profile
   - Add to GitHub profile README
   - Share on social media

3. **SEO Optimization** (Optional)
   - Add Google Analytics
   - Submit to Google Search Console
   - Add meta tags (already included)

4. **Custom Domain** (Optional)
   - Buy domain from Namecheap, GoDaddy, etc.
   - Connect to your hosting (Netlify/Vercel)
   - Update DNS settings

---

## Troubleshooting

### GitHub Pages not showing?
- Wait 2-3 minutes for first deployment
- Check repository is **Public**
- Verify `index.html` is in root folder
- Check Pages settings: Source = main branch

### Styles not loading?
- Check file paths in `index.html` are correct
- Ensure `css/style.css` exists
- Check browser console for errors

### Images/assets not loading?
- Use relative paths (not absolute)
- Check `assets/` folder structure
- Verify file names match exactly

### Contact form not working?
- EmailJS needs to be configured
- Check browser console for errors
- Verify EmailJS credentials in `js/main.js`

---

## Recommended: Netlify (Fastest & Easiest)

**For beginners, I recommend Netlify:**
1. No command line needed
2. Drag and drop deployment
3. Free SSL certificate
4. Custom domain support
5. Auto-deploy from GitHub (optional)

**Steps:**
1. Zip your `portfolio-vanilla` folder
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the zip file
4. Done! Your site is live in 30 seconds

---

## Need Help?

If you encounter any issues during deployment, check:
- Browser console for errors (F12)
- Network tab for failed file loads
- GitHub/Netlify/Vercel deployment logs

Good luck with your deployment! 🚀

