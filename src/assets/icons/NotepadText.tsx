import React from "react";

function NotepadText({ size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-notepad-text"
      viewBox="0 0 24 24"
    >
      <path d="M8 2v4M12 2v4M16 2v4"></path>
      <rect width="16" height="18" x="4" y="4" rx="2"></rect>
      <path d="M8 10h6M8 14h8M8 18h5"></path>
    </svg>
  );
}

export default NotepadText;
