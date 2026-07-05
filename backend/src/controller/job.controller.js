

export const getAllJobs = async (req, res) => {
  try {
    // const jobs = await Job.find();
   res.json({
        success: true,
        message: "API Working"
    });
    
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
