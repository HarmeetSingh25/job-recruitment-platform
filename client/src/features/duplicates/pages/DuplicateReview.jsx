import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDuplicates } from "../slice/duplicateSlice";

import DuplicateTable from "../component/DuplicateTable";

const DuplicateReview = () => {
  const dispatch = useDispatch();

  const { duplicates } = useSelector(
    (state) => state?.duplicates
  );

  useEffect(() => {
    dispatch(fetchDuplicates());
  }, []);
console.log(duplicates);

  return (
    <DuplicateTable duplicates={duplicates} />
  );
};

export default DuplicateReview;