import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Telegram AI Agent</h1>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accounts</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Groups</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Account Status Card */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <Image src="/vercel.svg" width={24} height={24} alt="Account" className="text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Active Accounts</dt>
                      <dd className="text-lg font-semibold text-gray-900 dark:text-white">3</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Groups Monitoring Card */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <Image src="/globe.svg" width={24} height={24} alt="Groups" className="text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Monitored Groups</dt>
                      <dd className="text-lg font-semibold text-gray-900 dark:text-white">12</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Summary Card */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                    <Image src="/file.svg" width={24} height={24} alt="Messages" className="text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Messages Processed</dt>
                      <dd className="text-lg font-semibold text-gray-900 dark:text-white">1,234</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Summaries Section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Summaries</h2>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Sample summary items - will be replaced with real data */}
                <li className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Tech Discussion Group</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Latest discussion about AI developments and their impact on society...</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">5m ago</div>
                  </div>
                </li>
                <li className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Marketing Strategies</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Team discussed Q1 marketing plans and budget allocation...</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">15m ago</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
