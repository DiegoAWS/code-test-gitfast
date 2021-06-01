import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCommits } from "../../redux/commits/actions"
import OneCommit from "./OneCommit"
import loadingIcon from '../../assets/imgs/loadingIcon.gif'

export default function Commits() {
  const dispatch = useDispatch()
  const commits = useSelector((state) => state.commits.commits)
  const loading = useSelector((state) => state.commits.loading)
  const errors = useSelector((state) => state.commits.errors)

  useEffect(() => {
    dispatch(getCommits())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log({
    commits,
    loading,
    errors,
  })

  return <div className='p-5'>
    <div className='d-flex align-items-center'>
      <h2 className='m-0 text-light'>Commits</h2>
      {
        loading && <div className='ms-3 d-flex'>
          <img alt='' src={loadingIcon} width='20px' height='20px' />
        </div>
      }
    </div>

    <div className='d-flex justify-content-center'>

      <div className='m-4 w-100 border border-white rounded-3'>

        {commits?.length === 0 && !loading && <div className='text-light'>No commits availables</div>}
        {commits && Array.isArray(commits) && commits.map(item => (
          <OneCommit key={item.sha} commit={item} />
        ))}
      </div>
    </div>
  </div>
}
