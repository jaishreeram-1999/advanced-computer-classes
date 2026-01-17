import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-gray-400  rounded-3xl mx-4 mb-6 shadow-xl overflow-hidden mt-60 ">
      
      {/* center text */}
      <div className="text-center py-20 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          We teach advanced computer skills
          <br />
          for real-world careers
        </h2>

        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-white text-sm font-medium hover:bg-gray-800">
          Start a Course →
        </button>
      </div>

      {/* footer links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 pb-14 text-sm text-gray-600">
        
        {/* logo / about */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            Advanced Computer Classes
          </h3>
          <p>
            We provide high-level training in programming, design, and IT skills.
          </p>
        </div>

        {/* company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Courses</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* social */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Social</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* newsletter */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Newsletter</h4>
          <p className="mb-3">Get updates and free learning tips.</p>
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm flex-1"
            />
            <button className="ml-2 bg-gray-800 text-white rounded-full px-4 py-2 text-sm">
              →
            </button>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t text-center text-xs text-gray-500 py-4">
        © 2026 Advanced Computer Classes · All rights reserved
      </div>
    </footer>
  )
}



