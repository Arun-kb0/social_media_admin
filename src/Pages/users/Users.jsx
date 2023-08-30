import React from 'react'
import Button from '../../components/basic/Button'
import UserListItem from './UserListItem'
import Sidebar from '../../components/sidebar/Sidebar'

const Users = () => {

  const image = new window.URL("https://images.pexels.com/photos/18003658/pexels-photo-18003658/free-photo-of-i-am-on-the-top-of-world-view-from-250m-apartment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  const usersList = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      createdAt: "2023 -08 - 21",
      status: "active"
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "user",
      createdAt: "2023-08-20",
      status: "inactive"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "admin",
      createdAt: "2023-08-21",
      status: "suspended"
    },
  ]

  return (
    <div className='flex'>
      <div className={`left w-2/12`}>
        <Sidebar />
      </div>
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="font-semibold text-gray-700">User Accounts</h2>
            <span class="text-xs text-gray-500">View accounts of registered users</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="ml-10 space-x-8 lg:ml-40">
              <Button name={'Download csv'} />
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
                  <th class="px-5 py-3">User Role</th>
                  <th class="px-5 py-3">Created at</th>
                  <th class="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody class="text-gray-500">
                {usersList.map((user, i) => (
                  <UserListItem
                    id={user.id}
                    name={user.name}
                    role={user.role}
                    createdAt={user.createdAt}
                    status={user.status}
                    image={image}
                  />
                ))
                }
              </tbody>
            </table>
          </div>
          <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
            <div class="mt-2 inline-flex sm:mt-0">
              <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
              <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>


      </div>
    </div >

  )
}

export default Users