import React, { useEffect } from 'react'
import { Follower } from './components/Follower'
import { useFetch } from './hooks/useFetch'
import { paginate } from './utils'

export const App = () => {
  const { data, loading } = useFetch()
  return (
    <main>
      <div className='section-title'>
        <h1>Pagination</h1>
        <div className='underline'></div>
        <div className='followers'>
          <div className='container'>
            <Follower />
          </div>
        </div>
      </div>
    </main>
  )
}
