import { BellIcon } from "lucide-react";

function NoNotificationsFound() {
    return (
        <div className='flex flex-col items-center justify-center py-16 text-center'>
            <div className="size-16 bg-base-300 rounded-full flex items-center justify-center mb-4">
                <BellIcon className="size-8 text-base-content opacity-40" />
            </div>
            <h3 className='text-lg mb-2 font-semibold'>No notifications yet.</h3>
            <p className='text-base-content opacity-70 max-w-md'>
                    When you receive a friend request or message, they will appear here.
            </p>
        </div>
    )
}

export default NoNotificationsFound;