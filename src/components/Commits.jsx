import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommits } from "../redux/commits/actions";

export default function Commits() {
  const dispatch = useDispatch();
  const commits = useSelector((state) => state.commits.commits);
  const loading = useSelector((state) => state.commits.loading);
  const errors = useSelector((state) => state.commits.errors);

  useEffect(() => {
    dispatch(getCommits());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({
    commits,
    loading,
    errors,
  });
  
  return <div>COMMITS</div>;
}
