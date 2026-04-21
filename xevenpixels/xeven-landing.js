const testimonials = [
  {
    name: "Anas Consultancy",
    role: "CEO, Ecommerce",
    quote:
      "Good work, delivered fast and exactly as needed. Every revision was handled quickly and communication remained clear throughout.",
  },
  {
    name: "Marta Holdings",
    role: "Founder, Education Brand",
    quote:
      "The team understood our business model immediately and translated it into a clean website that converts. Highly recommended.",
  },
  {
    name: "Northline Ventures",
    role: "Managing Director",
    quote:
      "Clear timelines, smart design decisions, and excellent execution quality. We launched ahead of schedule with better metrics.",
  },
  {
    name: "Luna Craft Studio",
    role: "Brand Lead",
    quote:
      "From discovery to launch, every step felt structured and thoughtful. Their SEO and UI work noticeably improved our inbound leads.",
  },
  {
    name: "Grove Medical",
    role: "Operations Head",
    quote:
      "Great communication and reliable delivery. They turned complex requirements into a polished digital experience without friction.",
  },
];

let activeTestimonial = 0;

const clientName = document.getElementById("client-name");
const clientRole = document.getElementById("client-role");
const clientQuote = document.getElementById("client-quote");
const prevButton = document.getElementById("prev-testimonial");
const nextButton = document.getElementById("next-testimonial");
const dots = Array.from(document.querySelectorAll(".slider-dots span"));

function renderTestimonial(index) {
  const current = testimonials[index];
  clientName.textContent = current.name;
  clientRole.textContent = current.role;
  clientQuote.textContent = current.quote;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function updateTestimonial(step) {
  activeTestimonial = (activeTestimonial + step + testimonials.length) % testimonials.length;
  renderTestimonial(activeTestimonial);
}

prevButton?.addEventListener("click", () => updateTestimonial(-1));
nextButton?.addEventListener("click", () => updateTestimonial(1));

const faqItems = Array.from(document.querySelectorAll(".faq-item"));

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-trigger");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      const trigger = faq.querySelector(".faq-trigger");
      trigger?.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

renderTestimonial(activeTestimonial);
