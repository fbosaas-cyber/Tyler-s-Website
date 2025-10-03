import React from 'react';

interface TimelineEntryProps {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface CompactTimelineProps {
  entries: TimelineEntryProps[];
}

const CompactTimeline = ({ entries }: CompactTimelineProps): JSX.Element => {
  return (
    <div className="space-y-4">
      {entries.map((entry: TimelineEntryProps, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-surface rounded-lg hover:bg-surface-hover transition-colors duration-200"
        >
          <div>
            <h4 className="font-semibold text-primary">{entry.company}</h4>
            <p className="text-text">{entry.title}</p>
          </div>
          <div className="text-right text-muted text-sm">
            <p>{entry.startDate} - {entry.endDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompactTimeline;