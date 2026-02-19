# Mohamed Qarabash - Portfolio Website

A premium, modern, and high-performance personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js (App Router), React Server Components, and TypeScript.
- **Premium UI**: Glassmorphic effects, smooth animations (Framer Motion), and responsive design.
- **Dynamic Content**: Data-driven projects, services, and skills sections.
- **SEO Optimized**: Metadata, semantic HTML, and accessibility features.
- **Performance**: Optimized images, code splitting, and fast load times.
- **Contact Form**: Integrated with Formspree for handling submissions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [Formspree](https://formspree.io/)
- **Deployment**: Vercel (Recommended)

## 📦 Installation

1.  **Install dependencies:**

    ```bash
    npm install
    # Ensure all required packages are installed:
    npm install framer-motion lucide-react clsx tailwind-merge @formspree/react
    ```

2.  **Run Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://mohamedtech.me](http://mohamedtech.me) to view the site.

## ⚙️ Configuration

### Contact Form
The contact form is pre-configured to use **Formspree**.
1.  Go to [Formspree](https://formspree.io/).
2.  Create a new form and get your **Form ID**.
3.  Update `components/Contact.tsx`:
    ```tsx
    const [state, handleSubmit] = useForm("YOUR_FORM_ID");
    ```

### Personal Data
Update the content in the `data/` and `lib/` folders:
- `data/projects.ts`: Add your projects.
- `data/skills.ts`: Update your technical skills.
- `data/services.ts`: Define your services (if freelancing).
- `lib/constants.ts`: Update links, email, and site metadata.

## 🎨 Asset Guidelines

- Place your logo in `public/logo.png`
- Place project thumbnails in `public/projects/`
- Update `app/favicon.ico` with your brand icon.

## 🚢 Deployment

1.  Push to GitHub.
2.  Import project to **Vercel**.
3.  Deploy! (Next.js presets handle everything automatically).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
