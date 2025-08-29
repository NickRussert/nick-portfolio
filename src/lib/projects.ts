// src/lib/projects.ts
// Centralized site content for Nick's portfolio
// Edit email/LinkedIn, project links, and paper paths as needed.

export type Link = { label: string; href: string };

export type Project = {
  slug: string; // used in /projects/[slug]
  title: string;
  summary: string;
  impact?: string[];
  tech: string[];
  links?: Link[]; // repo/demo links
  paper?: { label: string; href: string }; // e.g., /papers/my-paper.pdf
  badge?: string; // small category pill
};

export const projects: Project[] = [
  {
    slug: "cancer-detection-ood",
    title: "Out-of-Domain Cancer Detection Model",
    summary:
      "Compared multiple classifiers for malignant vs. benign imaging and used GANs to synthesize medical images, improving robustness on out-of-domain sets.",
    impact: [
      "Increased accuracy and stability across distribution shifts",
      "Validated on held-out, out-of-domain cohorts",
    ],
    tech: ["Python", "PyTorch", "TensorFlow/Keras", "GANs", "OpenCV"],
    links: [
      { label: "GitHub", href: "#" }, // TODO: replace with repo link
    ],
    paper: { label: "Paper (PDF)", href: "/papers/cancer-ood.pdf" },
    badge: "Computer Vision",
  },
  {
    slug: "crypto-lstm",
    title: "Cryptocurrency Price Prediction (LSTM)",
    summary:
      "Modeled temporal patterns with LSTMs on Yahoo Finance data; backtested trading rules vs. buy‑and‑hold baselines.",
    impact: [
      "Outperformed buy‑and‑hold baseline in backtests",
      "Clean data pipeline with reproducible notebooks",
    ],
    tech: ["Python", "TensorFlow/Keras", "Pandas", "NumPy", "Matplotlib"],
    links: [
      { label: "GitHub", href: "https://github.com/NickRussert/CryptoPricePrediction" }, // TODO: replace with repo link
    ],
    paper: { label: "Paper (PDF)", href: "/papers/crypto-lstm.pdf" },
    badge: "Time Series",
  },
  {
    slug: "asl-hand-signs",
    title: "ASL Hand Sign Recognition",
    summary:
      "Compared HOG-based classical approach vs. CNNs for large-scale ASL sign classification.",
    impact: [
      "Achieved ~99% classification accuracy",
      "CNNs outperformed HOG features significantly",
    ],
    tech: ["Python", "OpenCV", "scikit-learn", "TensorFlow/Keras"],
    links: [
      { label: "GitHub", href: "https://github.com/NickRussert/CNN-SVM-ASL" }, // TODO: replace with repo link
    ],
    paper: { label: "Paper (PDF)", href: "/papers/asl-recognition.pdf" },
    badge: "Deep Learning",
  },
];

export const about = {
  name: "Nick Russert",
  tagline: "Software Engineer · AI & Machine Learning",
  blurb:
    "I graduated Magna Cum Laude from San Diego State University (Computer Science). I focus on computer vision, predictive modeling, and data science—building systems that are both accurate and useful. I enjoy turning research ideas into real, production‑ready software.",
  email: "Russertnick@gmail.com",
  github: "https://github.com/NickRussert",
  linkedin: "https://www.linkedin.com/in/nick-russert-08372426a/", 
  location: "North Bergen, NJ",
};
