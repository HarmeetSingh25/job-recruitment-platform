import Job from "../models/job.model.js";
import { getalljobs } from "../services/job.service.js";

export const getjobs = async (req, res) => {
  console.log("Controller started");

  try {
    const jobs = await getalljobs(req.query);

    console.log("Service completed" );

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


