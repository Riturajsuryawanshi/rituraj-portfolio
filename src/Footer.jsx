import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Rituraj Suryawanshi. All rights reserved.</p>
      <p>
        Built with ❤️ using React and Tailwind CSS. <br />
        Deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Vercel
        </a>
      </p>
    </footer>
  );
}
