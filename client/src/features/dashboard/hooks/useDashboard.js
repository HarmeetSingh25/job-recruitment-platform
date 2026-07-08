import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboard.service.js";

const useDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardStats();
        
        // console.log(data);
        
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { stats, loading };
};

export default useDashboard;