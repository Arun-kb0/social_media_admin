import React, { useEffect, useState } from 'react'
import CsvDownloadButton from 'react-json-to-csv'

import Sidebar from '../../components/sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getErrorLogs, getReqLogs } from '../../redux/features/log/LogActions'
import ReqListItem from './reqListItem'
import Dropdown from '../../components/basic/Dropdown'
import LogTable from './LogTable'


// ! add route to get log for backend 
const Log = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [filename, setFilename] = useState('')
  const [isErrorLog, setIsErrorLog] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { numberOfPages, currentPage, logsInPage, reqLogs, errorLogs, loading, } = useSelector(state => state.logs)



  useEffect(() => {
    isErrorLog
      ? dispatch(getErrorLogs(page))
      : dispatch(getReqLogs(page))
  }, [page, isErrorLog])

  useEffect(() => {
    if (reqLogs)
      setFilename(`reqLogs from ${reqLogs[0].date} ${reqLogs[0].time} to ${reqLogs[reqLogs.length - 1].date} ${reqLogs[reqLogs.length - 1].time}  `)
    if (errorLogs)
      setFilename(`errorLogs from ${errorLogs[0].date} ${errorLogs[0].time} to ${errorLogs[errorLogs.length - 1].date} ${errorLogs[errorLogs.length - 1].time}  `)
  }, [reqLogs, errorLogs])


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

  const handleReqLog = () => {
    setPage(1)
    setIsErrorLog(false)
  }
  const handleErrorLog = () => {
    setPage(1)
    setIsErrorLog(true)
  }


  const dropdownList = [
    {
      name: "Reqest Logs",
      icon: null,
      onClick: handleReqLog
    },
    {
      name: "Error Logs",
      icon: null,
      onClick: handleErrorLog

    }
  ]

  return (
    <div className='flex'>
      <div className={`left w-2/12`}>
        <Sidebar />
      </div>

      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 overflow-y-scroll h-[85vh] w-10/12  ">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">{isErrorLog ? "Error Logs" : "Reqest Logs"}</h2>
            <span className="text-xs text-gray-500">{isErrorLog
              ? `${logsInPage} Reqest Logs in page`
              : `${logsInPage} Error Logs in page`
            }</span>
            <div className='py-1'>
              <button className='btn p-3' onClick={() => setIsDropdownOpen((prev) => !prev)} >change Log Type</button>
              {isDropdownOpen &&
                <Dropdown ListItems={dropdownList} position={"mt-3"} />
              }
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40">
              <CsvDownloadButton
                className="inline-block rounded-xl bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                data={isErrorLog ? (errorLogs && errorLogs) : (reqLogs && reqLogs)}
                filename={filename}
              />
            </div>
          </div>
        </div>

        <div className="overflow-y-hidden w-full rounded-lg border">
          <div className="overflow-x-auto">
            {isErrorLog
              ? <LogTable logs={errorLogs} isErrorLog={isErrorLog} />
              : <LogTable logs={reqLogs} isErrorLog={isErrorLog} />
            }
          </div>

          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm"> Showing {currentPage} of {numberOfPages} pages </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button
                className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100"
                onClick={handlePageDec}
              >
                Prev
              </button>
              <button
                className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100"
                onClick={handlePageInc}
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Log