import React from 'react'
import Avatar from '../../components/basic/Avatar'

const UserListItem = ({ id, name, role, createdAt, status, image }) => {
  const handlUser = () => {
    
  }

  return (
    <tr>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{id}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <button class="flex items-center" onClick={handlUser}>
          <div class="h-10 w-10 flex-shrink-0">
            <Avatar image={image} name={name} />
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
        {status && < span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Online</span>}
        {!status && <span class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">Offline</span>}
      </td>
    </tr>
  )
}

export default UserListItem