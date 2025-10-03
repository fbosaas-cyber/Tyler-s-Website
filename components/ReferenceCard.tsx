import React from 'react';

interface ReferenceCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  imageUrl?: string;
}

const ReferenceCard = ({
  name,
  title,
  company,
  quote,
  imageUrl
}: ReferenceCardProps): JSX.Element => {
  return (
    <div className="card-gradient p-6 rounded-xl">
      <div className="flex items-start gap-4">
        {imageUrl && (
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <blockquote className="text-text italic mb-4">{quote}</blockquote>
          <div>
            <h4 className="text-primary font-semibold">{name}</h4>
            <p className="text-muted text-sm">
              {title} at {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;