import React from "react";
import { BellIcon, PencilIcon } from "lucide-react";

const getInitials = (name: string) => {
  const names = name.split(" ");
  return names
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};
export default function Blogs() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Medium</h1>
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <PencilIcon className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              K
            </button>
          </div>
        </div>
      </header>
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex space-x-6">
          <a href="#" className="text-gray-900 font-medium">
            For you
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Following
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            React
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            JavaScript
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Programming
          </a>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8 flex">
        <div className="w-2/3 pr-8">
          <article className="mb-8">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-medium text-gray-700">
                  {getInitials("Tari Ibada")}
                </span>
              </div>
              <span className="text-sm">Tari Ibaba in Coding Beauty</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              This new JavaScript operator is an absolute game changer
            </h2>
            <p className="text-gray-600 mb-2">Say goodbye to try-catch</p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Sep 18</span>
              <span className="mx-1">·</span>
              <span>1.99K views</span>
              <span className="mx-1">·</span>
              <span>38 comments</span>
            </div>
            <hr className="border-gray-200" />
          </article>
          <article className="mb-8">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-medium text-gray-700">
                  {getInitials("Vitaliy Korzhenko")}
                </span>
              </div>
              <span className="text-sm">Vitaliy Korzhenko</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              JavaScript Array Interview Questions
            </h2>
            <p className="text-gray-600 mb-2">
              1. How Do You Find the Largest Number in an Array?
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Sep 18</span>
              <span className="mx-1">·</span>
              <span>111 views</span>
            </div>
            <hr className="border-gray-200" />
          </article>
          <article className="mb-8">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-medium text-gray-700">
                  {getInitials("Shuai Li")}
                </span>
              </div>
              <span className="text-sm">Shuai Li in Programming Domain</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Can You Answer This Senior Level JavaScript Promise Interview
              Question?
            </h2>
            <p className="text-gray-600 mb-2">
              Most interviewees failed on it.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Aug 12</span>
              <span className="mx-1">·</span>
              <span>3.2K views</span>
              <span className="mx-1">·</span>
              <span>34 comments</span>
            </div>
            <hr className="border-gray-200" />
          </article>
        </div>
        <aside className="w-1/3">
          <section className="mb-8">
            <h3 className="text-lg font-bold mb-4">Staff Picks</h3>
            {/* Staff picks content would go here */}
          </section>
          <section>
            <h3 className="text-lg font-bold mb-4">Recommended topics</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                Data Science
              </span>
              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                Self Improvement
              </span>
              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                Technology
              </span>
              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                Writing
              </span>
              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                Relationships
              </span>
              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                Politics
              </span>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
