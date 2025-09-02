import React, { useState } from "react";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      src: "/images/member_4.jpg",
      name: "Gabriel Matthew Cabije",
      position: "Team Leader",
      description: "Leads the team with expertise in project management and software architecture.",
      techstack: ["React", "Node.js", "MongoDB"],
      gmail: "gabriel@example.com",
      github: "https://github.com/gabriel",
    },
    {
      src: "/images/member_1.jpg",
      name: "Kent Buno",
      position: "Backend Developer",
      description: "Specializes in building secure and scalable backend systems.",
      techstack: ["Laravel", "MySQL", "PHP"],
      gmail: "kent@example.com",
      github: "https://github.com/kent",
    },
    {
      src: "/images/member_2.jpg",
      name: "Edward Belda",
      position: "Frontend Developer",
      description: "Focused on creating responsive and interactive user interfaces.",
      techstack: ["React", "TailwindCSS", "JavaScript"],
      gmail: "edward@example.com",
      github: "https://github.com/edward",
    },
    {
      src: "/images/member_3.jpg",
      name: "Roselle Durano",
      position: "UI/UX Designer",
      description: "Designs intuitive and visually appealing user experiences.",
      techstack: ["Figma", "Adobe XD", "Canva"],
      gmail: "roselle@example.com",
      github: "https://github.com/roselle",
    },
  ];

  return (
    <section id="team" className="py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Meet Our Team</h2>
        <p className="text-white mt-4">The people behind this amazing team.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            src={member.src}
            name={member.name}
            position={member.position}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            {/* Member Info */}
            <div className="flex flex-col items-center">
              <img
                src={selectedMember.src}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedMember.name}
              </h3>
              <p className="text-gray-500">{selectedMember.position}</p>
              <p className="mt-4 text-gray-600 text-center">
                {selectedMember.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Tech Stack:</h4>
                <div className="flex gap-2 flex-wrap mt-2">
                  {selectedMember.techstack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 space-y-2 text-center">
                <p>
                  📧 <a href={`mailto:${selectedMember.gmail}`} className="text-blue-600 hover:underline">{selectedMember.gmail}</a>
                </p>
                <p>
                  💻 <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{selectedMember.github}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
