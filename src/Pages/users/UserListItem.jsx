import React from 'react'

const UserListItem = ({ id, name, role, createdAt, status, image }) => {
  const handlUser = () => {
    //  ! logic for getting single user
  }

  return (
    <tr>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{id}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <button class="flex items-center" onClick={handlUser}>
          <div class="h-10 w-10 flex-shrink-0">
            <img class="h-full w-full rounded-full" src={image} alt="" />
          </div>
          <div class="ml-3">
            <p class="whitespace-no-wrap">{name}</p>
          </div>
        </button>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{role}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{createdAt}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        {status === 'active' && < span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">{status}</span>}
        {status === 'suspended' && <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">{status}</span>}
        {status === 'inactive' && <span class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">{status}</span>}
      </td>
    </tr>
  )
}

export default UserListItem