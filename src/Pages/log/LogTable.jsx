import React from 'react'
import ReqListItem from './reqListItem'
import ErrorLogItem from './ErrorLogItem'

function LogTable({ logs, isErrorLog }) {
  return (
    <>
      {
        isErrorLog
          // * error logs
          ? <table className="w-full">
            <thead>
              <tr className="bg-slate-300 text-left text-xs font-semibold uppercase tracking-widest text-grey-700">
                <th className="px-5 py-3">id</th>
                <th className="px-5 py-3">date</th>
                <th className="px-5 py-3">name</th>
                <th className="px-5 py-3">error</th>
                <th className="px-5 py-3">url</th>
                <th className="px-5 py-3">origin</th>
              </tr>
            </thead>
            <tbody className="text-gray-500 " >
              {logs?.map((errorLog) => (
                <ErrorLogItem
                  key={errorLog.id}
                  id={errorLog.id}
                  date={errorLog.date}
                  time={errorLog.time}
                  name={errorLog.name}
                  error={errorLog.error}
                  url={errorLog.url}
                  origin={errorLog.origin}
                />
              ))
              }
            </tbody>
          </table>

          // * reqlogs
          : <table className="w-full">
            <thead>
              <tr className="bg-slate-300 text-left text-xs font-semibold uppercase tracking-widest text-grey-700">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">date</th>
                <th className="px-5 py-3">method</th>
                <th className="px-5 py-3">url</th>
                <th className="px-5 py-3">origin</th>
              </tr>
            </thead>
            <tbody className="text-gray-500 ">
              {logs?.map((reqLog) => (
                <ReqListItem
                  key={reqLog.id}
                  id={reqLog.id}
                  date={reqLog.date}
                  time={reqLog.time}
                  method={reqLog.method}
                  url={reqLog.url}
                  origin={reqLog.origin}
                />
              ))
              }
            </tbody>
          </table>
      }
    </>
  )
}

export default LogTable