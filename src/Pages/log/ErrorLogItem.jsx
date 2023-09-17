import React from 'react'

function ErrorLogItem({ id, date, time, name, error, url ,origin }) {
  return (
    <tr>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{id}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{`${date} ${time}`}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{name}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{error}</p>
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

export default ErrorLogItem