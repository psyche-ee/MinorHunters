import React from "react";
import { X } from "lucide-react"; // for close icon

const MemberModal = ({ isOpen, onClose, member }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={member.src}
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full shadow-md"
          />
        </div>

        {/* Info */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">{member.name}</h2>
          <p className="text-gray-500">{member.position}</p>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-justify">{member.description}</p>

        {/* Tech Stack */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Tech Stack</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {member.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-6 flex flex-col gap-2 text-center">
          <a
            href={`mailto:${member.gmail}`}
            className="text-blue-600 hover:underline"
          >
            {member.gmail}
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
