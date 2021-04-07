import React, { useEffect, useRef, useState } from 'react'
import { Follower } from './components/Follower'
import { useFetch } from './hooks/useFetch'

export const App = () => {
  const { data, loading } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page, data])

  const switchPage = (page) => {
    setPage(page)
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
        <div className='followers'>
          <div className='container'>
            {followers.map((follower) => {
              const { id } = follower
              return <Follower key={id} {...follower} />
            })}
          </div>
        </div>

        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              Prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  className={`page-btn ${
                    index === page ? 'page btn active-btn' : ''
                  }`.trim()}
                  key={index}
                  onClick={() => switchPage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
