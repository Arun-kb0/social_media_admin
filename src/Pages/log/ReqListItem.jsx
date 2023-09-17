import React from 'react'

const ReqListItem = ({ id, date, time, method, url, origin }) => {

  
  return (
    <tr>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{id}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{`${date} ${time}`}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{method}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{url}</p>
      </td>

      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{origin}</p>
      </td>
    </tr>
  )
}

export default ReqListItem