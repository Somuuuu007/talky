import useAuthUser from '../hooks/useAuthUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router';
import { logout } from '../lib/api';
import { Link } from 'react-router';
import { BellIcon, ShipWheel, LogOutIcon } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

const Navbar = () => {
    const {authUser} = useAuthUser();
    const location = useLocation();
    const isChatPage = location.pathname?.startsWith("/chat");

    const queryClient = useQueryClient();
    const {mutate: logoutMutation} = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["authUser"]});
        }
    })

  return <nav className='bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center'>
   
   <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='flex items-center justify-end w-full'>

        {/* logo - only if we are in the chat page */}
        {isChatPage && (
            <div className='pl-5'>
            <Link to="/" className='flex items-center gap-2.5'>
                <ShipWheel className='size-9 text-primary' />
                <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>Talky</span>
            </Link>
            </div>
        )}


          <div className='flex items-center gap-3 sm:gap-4 ml-auto'>
               <Link to={"/notification"}>
               <button className='btn btn-ghost btn-circle'>
                <BellIcon className='h-6 w-6 text-base-content opacity-70' />
               </button>
               </Link>
          </div>

          <ThemeSelector />

          <div className='avatar'>
            <div className='w-9 rounded-full'>
                <img src={authUser?.profilePic} alt="user" rel="noreferrer" />
            </div>
          </div>

           <button className='btn btn-ghost btn-circle' onClick={
            logoutMutation}>
                
            <LogOutIcon className='h-6 w-6 text-base-content opacity-70' />
           </button>

    </div>
   </div>

  </nav>
}

export default Navbar
