// components/CompanyCard.tsx

import { useState } from 'react';

// Define a type for the company prop for better type safety
type Company = {
  name: string;
  logo: string;
  info: string;
  details: {
    title: string;
    date: string;
    desc?: string;
    skills?: string;
  }[];
};

export default function CompanyCard({ company }: { company: Company }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-[color:var(--surface)] rounded-lg shadow-md p-6 transition-all duration-200 border border-transparent hover:border-primary"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-4 mb-2">
        <img src={company.name === 'Continental' ? '/continental-logo.jpg' : company.logo} alt={company.name + ' logo'} className="w-12 h-12 object-contain rounded bg-black" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
        <h3 className="font-bold text-lg">{company.name}</h3>
      </div>
      {company.details.map((role, i) => (
        <div key={role.title + i} className="mb-3">
          <div className="font-semibold">{role.title}</div>
          <div className="text-sm text-[color:var(--muted)]">{role.date}</div>
          {role.desc && <p className="mt-1 text-sm">{role.desc}</p>}
          {role.skills && <div className="mt-1 text-xs text-[color:var(--muted)]">Skills: {role.skills}</div>}
        </div>
      ))}
      {/* Tooltip/overlay on hover */}
      {hovered && (
        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-lg z-10">
          <div className="bg-white text-black rounded-lg shadow-lg p-4 text-center max-w-xs">
            <div className="font-bold mb-2">{company.name}</div>
            <div className="mb-2"><img src={company.name === 'Continental' ? '/continental-logo.jpg' : company.logo} alt={company.name + ' logo'} className="w-16 h-16 mx-auto mb-2 object-contain bg-black" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} /></div>
            <div className="text-sm">{company.info}</div>
          </div>
        </div>
      )}
    </div>
  );
}