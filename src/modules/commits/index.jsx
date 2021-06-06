import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCommits } from "../../redux/commits/actions"

import Pagination from "../../components/Pagination"
import SpinnerLoading from "../../components/SpinnerLoading"
import VerticalCommitsTimeLine from "./VerticalCommitsTimeLine"

export default function Commits() {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  const commits = useSelector((state) => state.commits.commits)
  const loading = useSelector((state) => state.commits.loading)
  const links = useSelector((state) => state.commits.links)
  const errors = useSelector((state) => state.commits.errors)

  const showCommits = !errors && commits && Array.isArray(commits) && commits?.length > 0

  useEffect(() => {
    dispatch(getCommits(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return <div className='p-5'>

    <div className='d-flex align-items-center'>
      <h2 className='m-0 text-light'>Repository Commits</h2>
      <SpinnerLoading loading={loading} />
      {showCommits && <Pagination links={links} loading={loading} page={page} setPage={setPage} />}
    </div>

    {!errors && commits?.length === 0 && !loading && <div className='text-light'>No commits availables</div>}

    {showCommits && <VerticalCommitsTimeLine commitList={commits} />
    }
    {showCommits && <Pagination links={links} loading={loading} page={page} setPage={setPage} />}
  </div>
}
