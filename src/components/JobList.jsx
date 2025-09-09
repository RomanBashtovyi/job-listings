import { useSelector, useDispatch } from 'react-redux'
import { JobPosition } from './JobPosition'
import { selectAllPositions } from 'store/positions/position-selectors'
import { addFilter } from 'store/filters/filter-action'

const JobList = () => {
  const positions = useSelector(selectAllPositions)
  const dispatch = useDispatch()

  const handleClearFilters = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} handleClearFilters={handleClearFilters} {...item} />
      ))}
    </div>
  )
}

export { JobList }
