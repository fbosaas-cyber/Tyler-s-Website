import React from 'react';
import { IconType } from 'react-icons';

interface SuccessStoryProps {
  icon: IconType;
  title: string;
  story: string;
  metric?: string;
  skills: string[];
}

const SuccessStoryCard = ({
  icon: Icon,
  title,
  story,
  metric,
  skills
}: SuccessStoryProps): JSX.Element => {
  return (
    <div className="card-gradient p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
          <Icon size={24} color="currentColor" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          {metric && (
            <div className="inline-block px-3 py-1 bg-surface rounded-full text-primary font-medium text-sm mb-3">
              {metric}
            </div>
          )}
          <p className="text-text mb-4">{story}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-surface rounded-full text-muted text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;