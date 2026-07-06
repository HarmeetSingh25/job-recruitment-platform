import { getDashboarddata } from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    
    const dashboard = await getDashboarddata();
    
    return res.status(200).json({
      success: true,
      ...dashboard,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
