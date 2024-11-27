import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Side from './components/sidebar/Side'
const user = {
  name: 'LD',
  email: 'admin@gmail.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '/5Eqi3pEyTJliNa7ANd9GcQN', current: true },
  { name: 'Messages', href: '/Testimony', current: false },
  { name: 'Requests', href: '/Request', current: false },

]
const userNavigation = [
  { name: 'Your Profile', href: '/admin/profile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// export default function Example() {
//   return (
//     <>

//       <div className="min-h-full">
//         <Disclosure as="nav" className="bg-gray-800">
//           <div className="mx-auto ">
//             <div className="flex ">
//               <div className="flex items-center">
//                 <div className="left shrink-0">
//                   <img
//                     alt="Your Company"
//                     src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8w2AWEIyuoEwk1AYSyLeSq0HMgpayxIKs940qQIeiMKwJMZM7"
//                     className="size-30 w-30 "
//                   />
//                 </div>
//                 <div className="hidden md:block">
//                   <div className="left flex ">
//                     {navigation.map((item) => (
//                       <Link
//                         key={item.name}
//                        to={item.href}
//                         aria-current={item.current ? 'page' : undefined}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium',
//                         )}
//                       ><button className='btn'>{item.name}</button>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-4 flex items-center md:ml-6">
            
//                   {/* Profile dropdown */}
//                   <Menu as="div" >
//                     <div>
//                       <MenuButton className=" w-24 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                         <img alt="" src={user.imageUrl} className="size-19 rounded-full" />
//                         <p className='text-blue-400'>{user.name}</p>
                        
//                       </MenuButton><p>{user.email}</p>
//                     </div>
//                     <MenuItems
//                       transition
//                       className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                     >
//                       {userNavigation.map((item) => (
//                         <MenuItem key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="button block px-4 py-2  data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                           ><button className='button'>{item.name}</button>
                            
//                           </Link>
//                         </MenuItem>
//                       ))}
//                     </MenuItems>
//                   </Menu>
//                 </div>
//               </div>

//               <div className="-mr-2 flex md:hidden">
//                 {/* Mobile menu button */}
//                 {/*  */}
//                 {/*  */}
//                 <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
//                   <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
//                 </DisclosureButton>
//               </div>
//             </div>
//           </div>

//           <DisclosurePanel className="md:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//               {navigation.map((item) => (
//                 <DisclosureButton
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   aria-current={item.current ? 'page' : undefined}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium',
//                   )}
//                 >
//                   {item.name}
//                 </DisclosureButton>
//               ))}
//             </div>
   
//             <div className="border-t border-gray-700 pb-3 pt-4">
//               <div className="flex items-center px-5">
            
//                 <div className="ml-3">
//                   <div className="text-base/5 font-medium text-white">{user.name}</div>
//                   <div className="text-sm font-medium text-gray-400">{user.email}</div>
//                 </div>

//               </div>
//               <div className="mt-3 space-y-1 px-2">
//                 {userNavigation.map((item) => (
//                   <DisclosureButton
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                   >
//                     {item.name}
//                   </DisclosureButton>
//                 ))}
//               </div>
//             </div>
//           </DisclosurePanel>
//         </Disclosure>

//         <header className="bg-white shadow">
//           <div className="mx-auto max-w-7xl sm:px-6 ">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
//           </div>
//         </header>
//         <main>
//           <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//             {/* Your content */} 
//             <Side/>
//             </div>
//         </main>
//       </div>
//     </>
//   )
// }
export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  alt="Your Company"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8w2AWEIyuoEwk1AYSyLeSq0HMgpayxIKs940qQIeiMKwJMZM7"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <div className="hidden md:flex space-x-4 ml-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Profile Dropdown */}
              <div className="hidden md:flex items-center space-x-4">
                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center text-sm focus:outline-none">
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="ml-2 text-blue-400 text-sm md:text-base">
                      {user.name}
                    </span>
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-4">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="h-8 w-8 rounded-full"
                />
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

       
          <div className="container mx-auto px-4 py-6  lg:px-8">
            <Side />
          </div>
      
      </div>
    </>
  );
}

