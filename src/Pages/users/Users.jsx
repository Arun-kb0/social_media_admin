import React, { useEffect, useState } from 'react'
import CsvDownloadButton from 'react-json-to-csv'
import Button from '../../components/basic/Button'
import UserListItem from './UserListItem'
import Sidebar from '../../components/sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/features/user/userActions'

const Users = () => {
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const { users ,numberOfPages,currentPage } = useSelector(state => state.user)

  const handlePageInc = () => {
    if (numberOfPages && numberOfPages > currentPage) {
      setPage((prev) => prev + 1)
    }
    console.log(page)
  }

  const handlePageDec = () => {
    if (currentPage && currentPage > 1) {
      setPage((prev) => prev - 1)
    }
    console.log(page)
  }


  useEffect(() => {
    dispatch(getUsers(page))
  }, [page])

  

  return (
    <div className='flex'>
      <div className={`left w-2/12`}>
        <Sidebar />
      </div>
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 overflow-y-scroll h-[85vh] w-10/12">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="font-semibold text-gray-700">User Accounts</h2>
            <span class="text-xs text-gray-500">View accounts of registered users</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="ml-10 space-x-8 lg:ml-40">
              <CsvDownloadButton
                className="inline-block rounded-xl bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                data={users}
                filename={`users ${currentPage}.csv`}
              />
            </div>
          </div>
        </div>

        <div class="overflow-y-hidden rounded-lg border">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-slate-300 text-left text-xs font-semibold uppercase tracking-widest text-grey-700">
                  <th class="px-5 py-3">ID</th>
                  <th class="px-5 py-3">Full Name</th>
                  <th class="px-5 py-3">Email</th>
                  <th class="px-5 py-3">Socket Id</th>
                  <th class="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody class="text-gray-500">
                {users?.map((user, i) => (
                  <UserListItem
                    id={user.id}
                    name={user.name}
                    role={user.email}
                    createdAt={user?.socketId}
                    status={user.isOnline}
                    image={user.photo ? user.photo : "" }
                  />
                ))
                }
              </tbody>
            </table>
          </div>
          <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span class="text-xs text-gray-600 sm:text-sm"> Showing {currentPage} of {numberOfPages} pages </span>
            <div class="mt-2 inline-flex sm:mt-0">
              <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100" onClick={handlePageDec}>Prev</button>
              <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100" onClick={handlePageInc}>Next</button>
            </div>
          </div>
        </div>


      </div>
    </div >

  )
}

export default Users