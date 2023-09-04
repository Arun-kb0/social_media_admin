import React from 'react'

const PostListItem = ({ id, title, likeCount, commentsCount, createdAt, image }) => {
  const handlePost = () => {
    //  ! logic for getting single post
  }

  return (
    <tr>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{id}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <button class="flex items-center" onClick={handlePost}>
          <div class="h-10 w-10 flex-shrink-0">
            <img class="h-full w-full rounded-full" src={image} alt="" />
          </div>
          <div class="ml-3">
            <p class="whitespace-no-wrap">{title}</p>
          </div>
        </button>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{likeCount}</p>
      </td>
      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{commentsCount}</p>
      </td>

      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p class="whitespace-no-wrap">{createdAt}</p>
      </td>
    </tr>
  )
}

export default PostListItem