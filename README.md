# Mubashar Hussain — Professional Portfolio
### weavingexpert.github.io

A premium personal portfolio website for **Mubashar Hussain**, Senior Weaving Engineer & Textile Quality Manager, built for GitHub Pages hosting.

---

## 🚀 Quick Deployment

1. Create a GitHub repository named exactly: `weavingexpert.github.io`
2. Upload all files from this folder into the root of that repository
3. Go to **Settings → Pages → Source: Deploy from a branch → main / (root)**
4. Your site will be live at: **https://weavingexpert.github.io**

---

## 📁 Project Structure

```
weavingexpert.github.io/
├── index.html              ← Main website (all sections)
├── robots.txt              ← SEO crawler instructions
├── sitemap.xml             ← SEO sitemap
├── README.md               ← This file
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   └── js/
│       └── main.js         ← All JavaScript
├── favicon/
│   └── favicon.svg         ← Browser tab icon
└── resume/
    └── Mubashar-Hussain-CV.pdf  ← Your CV (add this!)
```

---

## ✅ Before Going Live — Checklist

### 1. Add Your Photo
Replace the placeholder in the hero and about sections:

**Hero section** (around line 170 in index.html):
```html
<!-- Remove the placeholder div and replace with: -->
<img src="assets/images/mubashar-hussain.jpg" 
     alt="Mubashar Hussain - Senior Weaving Engineer" 
     style="width:100%;height:100%;object-fit:cover;">
```

Save your photo as: `assets/images/mubashar-hussain.jpg`
Recommended size: 600x800px, portrait orientation.

### 2. Add Your CV
Save your resume as: `resume/Mubashar-Hussain-CV.pdf`

### 3. Update Contact Details
In `index.html`, find and replace:
- `mubashar.hussain@email.com` → your actual email
- `+92 300 123 4567` → your actual phone
- `linkedin.com/in/mubashar-hussain` → your LinkedIn URL
- `https://wa.me/923001234567` → your WhatsApp link (`https://wa.me/[country code][number]`)

### 4. Set Up Contact Form (Free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. In `index.html`, replace `YOUR_FORM_ID` in the form action URL

### 5. Update Your Experience
The timeline entries in the Experience section use placeholder company names. Update with your actual employers, dates, and achievements.

### 6. OG Image for Social Sharing
Create a 1200×630px image and save as `assets/images/og-image.jpg`
This appears when your link is shared on LinkedIn, Twitter, etc.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0d1b2a` | Primary dark color, hero, nav |
| Gold | `#c9a84c` | Accents, highlights, CTAs |
| Steel | `#4a6fa5` | Secondary accents, links |
| White | `#ffffff` | Light backgrounds |

**Fonts:**
- Display: Playfair Display (headings)
- Body: Inter (body text)
- Mono: JetBrains Mono (tags, code)

---

## 🌙 Dark Mode
The site includes automatic dark/light mode toggle. The user's preference is saved in localStorage.

---

## 📱 Responsive Breakpoints
- Desktop: 1200px+ (full layout)
- Tablet: 768–1024px (2-column grids)
- Mobile: <768px (single column, mobile nav)

---

## 🔧 Customization Tips

**To add a new skill card** in any panel, duplicate a `.skill-card` div and update the icon, name, and `data-width` value (0-100).

**To add a new timeline entry**, duplicate a `.timeline-item` div. Update the dot number, role, company, period, location, and responsibilities.

**To add a new project card**, duplicate a `.project-card` div in the projects section.

**Color theme change**: Update the CSS variables at the top of `style.css` under `:root`.

---

## 📈 SEO Keywords Targeted
- Weaving Engineer
- Textile Quality Manager  
- Textile Consultant
- Production Planning Specialist
- Fabric Quality Expert
- Weaving Consultant
- ISO 9001 Textile
- GOTS Certification Expert

---

## 📞 Support
For customization help, update the email and contact information throughout the site.

---

*Built for GitHub Pages — No backend, no database, no paid hosting required.*
