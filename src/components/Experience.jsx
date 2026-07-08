import { motion } from 'motion/react';

export default function Experience() {
  const fadeUp = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-10 bg-[#111111] text-[#F2F2ED] border-t border-[#F2F2ED]/10 relative z-10"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-display text-8xl md:text-[10rem] leading-none text-[#F2F2ED]/10 block -ml-2 select-none">
                02
              </span>
              <h2 className="font-display text-4xl md:text-6xl tracking-wide mt-[-2rem] relative z-10">
                EXPERIENCE
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {/* Crop2Cash Experience */}
            <motion.div
              {...fadeUp}
              className="border-b border-[#F2F2ED]/10 pb-12"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide text-[#F2F2ED]">
                    Frontend Developer
                  </h3>
                  <p className="text-[#F96A00] font-medium tracking-wide text-sm md:text-base uppercase">
                    CROP2CASH • Ibadan, Nigeria
                  </p>
                </div>
                <span className="font-body text-xs md:text-sm text-gray-400 tracking-wider">
                  JULY 2024 — JANUARY 2026
                </span>
              </div>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-light leading-relaxed mb-6">
                <li>
                  • Led the development of an internal Farm Management
                  Information System using React.js and TailwindCSS, improving
                  internal navigation by 40% and communication with farmers by
                  300%.
                </li>
                <li>
                  • Designed and implemented the product catalogue flow for
                  adding stock and managing product details, reducing manual
                  input errors by over 30%.
                </li>
                <li>
                  • Collaborated with senior engineers to build the orders page
                  and implement Role-Based Access Control (RBAC), reducing
                  unauthorized access vulnerabilities by over 50%.
                </li>
                <li>
                  • Engineered and validated the invite teammate gateway using
                  Yup validation architectures, preventing layout failures and
                  reducing teammate registration drop-offs by 25%.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'Redux',
                  'Tailwind CSS',
                  'Bootstrap',
                  'HTML/CSS',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#222222] text-gray-300 text-xs px-3 py-1 rounded-sm tracking-wider font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Freelance Experience */}
            <motion.div
              {...fadeUp}
              className="border-b border-[#F2F2ED]/10 pb-12"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide text-[#F2F2ED]">
                    Frontend Developer
                  </h3>
                  <p className="text-[#F96A00] font-medium tracking-wide text-sm md:text-base uppercase">
                    Freelance • Remote
                  </p>
                </div>
                <span className="font-body text-xs md:text-sm text-gray-400 tracking-wider">
                  JANUARY 2023 — JULY 2024
                </span>
              </div>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-light leading-relaxed mb-6">
                <li>
                  • Developed Rayna E-Commerce: Engineered a visually striking
                  storefront utilizing React and Redux architectures alongside
                  Firebase backend integration for frictionless product
                  discovery.
                </li>
                <li>
                  • Crafted CreoWis, a modern responsive SaaS homepage for a
                  note taking app utilizing Next.js, implementing complex Framer
                  Motion interactions that increased mobile engagement metrics
                  by 40%.
                </li>
                <li>
                  • Managed end-to-end Figma-to-Code lifecycles, mapping project
                  wireframes into production environments on Vercel and Netlify
                  for multiple regional clients.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'Redux',
                  'Tailwind CSS',
                  'Firebase',
                  'Framer Motion',
                  'Vercel',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#222222] text-gray-300 text-xs px-3 py-1 rounded-sm tracking-wider font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education section embedded into flow */}
            <motion.div {...fadeUp}>
              <h4 className="font-display text-xl tracking-wider text-gray-400 mb-4">
                EDUCATION / CREDENTIALS
              </h4>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <p className="font-body text-lg font-medium text-[#F2F2ED]">
                    The University of Ibadan
                  </p>
                  <p className="text-gray-400 text-sm">
                    BSc, Political Science
                  </p>
                </div>
                <span className="font-body text-xs md:text-sm text-gray-400 tracking-wider mt-1 md:mt-0">
                  MAY 2018 — JUNE 2024
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <p className="font-body text-lg font-medium text-[#F2F2ED]">
                    FullstackOpen - University of Helsinki
                  </p>
                  <p className="text-gray-400 text-sm">
                    Fullstack Web Development Certificate
                  </p>
                </div>
                <span className="font-body text-xs md:text-sm text-gray-400 tracking-wider mt-1 md:mt-0">
                  JAN 2026 — JAN 2027
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
