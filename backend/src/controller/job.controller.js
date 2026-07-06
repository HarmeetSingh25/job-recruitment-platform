import { getalljobs, getJobById } from "../services/job.service.js";

export const getjobs = async (req, res) => {
//   console.log("Controller started");

  try {
    const jobs = await getalljobs(req.query);

    // console.log("Service completed");

    return res.status(200).json({
      success: true,
      ...jobs,

    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await getJobById(id);
    if (!job) {
        throw new Error("Job not found");
    }
    return res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
