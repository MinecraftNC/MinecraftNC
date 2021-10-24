import { Link, Router } from "blitz"
import { useState, useEffect } from "react"
import { FaHome, FaInbox, FaClipboardList, FaCalendar, FaGithub } from "react-icons/fa"

const Sidebar = () => {
  const [query, setQuery] = useState("")
  useEffect(() => {
    if (Router.asPath) {
      const item = Router.asPath
      setQuery(item)
    }
  }, [])
  console.log("query", query)
  const [menu, setMenu] = useState(true)

  const checkActive = () => {
    if (query.indexOf("inbox") !== -1) {
      return "inbox"
    } else if (query.indexOf("notebook") !== -1) {
      return "notebook"
    } else if (query.indexOf("notes") !== -1) {
      return "notebook"
    } else if (query.indexOf("calender_month_view") !== -1) {
      return "calender_month_view"
    } else if (query.indexOf("calender_week_view") !== -1) {
      return "calender_month_view"
    } else if (query.indexOf("calender_day_view") !== -1) {
      return "calender_month_view"
    } else if (query.indexOf("important") !== -1) {
      return "important"
    } else if (query.indexOf("projects") !== -1) {
      return "projects"
    } else if (query.indexOf("todo_project_files") !== -1) {
      return "projects"
    } else if (query.indexOf("todo_project_links") !== -1) {
      return "projects"
    } else if (query.indexOf("todo_project_notes") !== -1) {
      return "projects"
    } else if (query.indexOf("todo_project_todos") !== -1) {
      return "projects"
    }
    return "home"
  }

  return (
    <>
      {
        <div
          onClick={() => setMenu(!menu)}
          className="flex items-center justify-center rounded-r-md bg-gray-800 text-gray-300 ml-0 cursor-pointer absolute inset-0 mt-10 m-auto w-8 h-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      }
      {menu && (
        <div className="float-left overflow-y-scroll lg:overflow-y-auto fixed lg:sticky h-screen z-40 top-0 bg-gray-900  pt-10 w-64 lg:w-72">
          <div className="px-8">
            <div className="flex items-center justify-between">
              <div className="w-32">
                <img className="w-full" src="/newlogo.png" alt="Logo" />
              </div>
              <div onClick={() => setMenu(!menu)} className="text-gray-700 ml-8 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </div>
            </div>
            <ul className="flex flex-wrap mt-10">
              <li className="w-1/2 flex justify-start mb-6">
                <a
                  href="javascript:void(0)"
                  className={
                    checkActive() == "home"
                      ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4"
                      : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"
                  }
                >
                  <FaHome />
                  <p className="mt-1 uppercase font-semibold text-xs">Home</p>
                </a>
              </li>
              <li className="w-1/2 flex justify-end mb-6">
                <a
                  href="javascript:void(0)"
                  className={
                    checkActive() == "inbox"
                      ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4"
                      : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"
                  }
                >
                  <FaInbox />
                  <p className="mt-1 uppercase font-semibold text-xs">Messages</p>
                </a>
              </li>
              <li className="w-1/2 flex justify-start mb-6">
                <a
                  href="javascript:void(0)"
                  className={
                    checkActive() == "notebook"
                      ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4"
                      : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"
                  }
                >
                  <FaClipboardList />
                  <p className="mt-1 uppercase font-semibold text-xs">Teamlist</p>
                </a>
              </li>
              <li className="w-1/2 flex justify-end mb-6">
                <a
                  href="javascript:void(0)"
                  className={
                    checkActive() == "calender_month_view"
                      ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4"
                      : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"
                  }
                >
                  <FaCalendar />
                  <p className="mt-1 uppercase font-semibold text-xs">Calendar</p>
                </a>
              </li>
            </ul>
            <div className="flex items-center justify-between text-gray-600">
              <h4 className="uppercase font-semibold">List</h4>
            </div>
            <ul className="text-gray-600 mt-8">
              <li className="mb-5">Items</li>
              <li className="mb-5">Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div className="px-8 py-4 w-full border-t border-gray-800 flex items-center text-gray-600 mt-10 text-lg">
            <Link href="https://github.com/MinecraftNC/MinecraftNC">
              <a className="hover:text-blue-800 flex items-center">
                <FaGithub />
                <a className="ml-1">GitHub</a>
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
