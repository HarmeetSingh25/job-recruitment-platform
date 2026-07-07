import { BellOff } from 'lucide-react';
import React from 'react'

const Notification = () => {
  return (
       <div className="flex items-center justify-center py-24">
      <div className="max-w-sm text-center bg-white border rounded-2xl shadow-sm p-10">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <BellOff size={40} className="text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          No Notifications
        </h2>

        <p className="mt-3 text-gray-500">
          You're all caught up. New job alerts and system updates
          will appear here.
        </p>

      </div>
    </div>
  );

  
}

export default Notification