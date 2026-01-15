# Portfolio Website - Abhilash Bhandari

A modern, professional, recruiter-ready portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

- **Dark Theme** - Modern, futuristic design with glassmorphism effects
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Subtle, professional animations throughout
- **Typing Animation** - Dynamic name typing effect in hero section
- **Project Filtering** - Filter projects by category (All, Web, ML, IoT, Java)
- **Project Modals** - Detailed project information in popup modals
- **Animated Skill Bars** - Progress bars that animate on scroll
- **Contact Form** - EmailJS-ready contact form
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Hamburger menu for mobile devices

## 📁 Project Structure

```
portfolio-vanilla/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles (glassmorphism, animations, responsive)
├── js/
│   └── main.js        # All JavaScript functionality
├── assets/
│   └── resume.pdf     # Your resume PDF (add your file here)
└── README.md          # This file
```

## 🛠️ Setup Instructions

1. **Add Your Resume PDF**
   - Place your resume PDF file in the `assets/` folder
   - Name it `resume.pdf`
   - The "Download Resume" button will automatically work

2. **Configure EmailJS (Optional)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - In `js/main.js`, replace:
     - `YOUR_PUBLIC_KEY` with your EmailJS public key
     - `YOUR_SERVICE_ID` with your service ID
     - `YOUR_TEMPLATE_ID` with your template ID
   - Uncomment the EmailJS code in the contact form handler

3. **Open the Website**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
   - Then visit `http://localhost:8000`

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --accent-primary: #00d4ff;      /* Primary accent color */
    --accent-secondary: #7b2cbf;    /* Secondary accent color */
    --bg-primary: #0a0a0f;          /* Background color */
}
```

### Content
- Edit `index.html` to update any text content
- Modify `js/main.js` to update project data in the `projectsData` array

### Skills
- Update skill percentages in `index.html` (in the skills section)
- Adjust `data-width` attributes on skill progress bars

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Sections

1. **Hero** - Name, role, location, social links, CTA buttons
2. **About** - Career objective
3. **Education** - Timeline of educational background
4. **Skills** - Programming languages, web technologies, core areas
5. **Projects** - Filterable project cards with modal details
6. **Experience** - Internship timeline
7. **Certifications** - Certifications and achievements
8. **Contact** - Contact form and information

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select your branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the `portfolio-vanilla` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📧 Contact Form Setup

The contact form is ready for EmailJS integration:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add your email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Update `js/main.js` with your credentials
6. Uncomment the EmailJS code

## 🎯 Performance

- No external dependencies (except EmailJS for contact form)
- Lightweight and fast loading
- Optimized animations
- Mobile-first responsive design



