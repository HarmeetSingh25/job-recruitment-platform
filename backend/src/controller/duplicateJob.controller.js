import {
  getDuplicateJobs,
  updateDuplicateStatus,
} from "../services/duplicateJob.service.js";

export const getDuplicates = async (req, res) => {
  try {
    const duplicates = await getDuplicateJobs();

    res.status(200).json({
      success: true,
      duplicates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDuplicate = async (req, res) => {
  try {
    const { status } = req.body;

    const duplicate = await updateDuplicateStatus(
      req.params.id,
      status
    );

    res.status(200).json({
      success: true,
      duplicate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};