import { Button } from "@/components/ui/button";
import Link from "next/link";

const AnalyticsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <Button asChild variant="outline">
          <Link href="/dashboard/analytics/monthly">Monthly</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard/analytics/weekly">Weekly</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default AnalyticsLayout;