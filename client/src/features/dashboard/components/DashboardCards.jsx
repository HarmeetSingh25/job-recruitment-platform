import {
  Briefcase,
  Building2,
  Monitor,
  Building,
} from "lucide-react";

import StatsCard from "./StatsCard";

const DashboardCards = ({ summary }) => {
  if (!summary) return null;

  const cards = [
    {
      title: "Total Jobs",
      value: summary.totalJobs,
      icon: <Briefcase />,
    },
    {
      title: "Remote Jobs",
      value: summary.remoteJobs,
      icon: <Monitor />,
    },
    {
      title: "Onsite Jobs",
      value: summary.onsiteJobs,
      icon: <Building />,
    },
    {
      title: "Companies",
      value: summary.companies,
      icon: <Building2 />,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default DashboardCards;