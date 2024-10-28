import { NavLink } from "react-router-dom";
export default function Header() {
    return   <header className="fixed z-50 flex h-[64px] w-full flex-wrap border-b border-gray-200 bg-white md:flex-nowrap md:justify-start dark:border-neutral-700 dark:bg-neutral-800">
      <nav className="container relative mx-auto w-full  py-2  md:flex md:items-center md:justify-between md:gap-3">
        <div className="flex items-center justify-between gap-x-1">
          <NavLink className="flex-none text-[30px] font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white" to="/" aria-label="Brand">Brand</NavLink>
    
          <button type="button" className="hs-collapse-toggle relative flex size-9 items-center justify-center rounded-lg border border-gray-200 text-[12px] font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
            <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg className="hs-collapse-open:block hidden size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
    
        <div id="hs-header-base" className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block" aria-labelledby="hs-header-base-collapse">
          <div className="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
            <div className="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:gap-1 md:py-0">
              <div className="grow">
                <div className="flex flex-col gap-0.5 md:flex-row md:items-center md:gap-1">
                  <a className="text-gray-800focus:outline-none flex items-center rounded-lg p-2 text-[19px] dark:text-neutral-200" href="#">
                    <svg className="me-3 block size-4 shrink-0 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Our books
                  </a>
    
                  <a className="text-gray-800focus:outline-none flex items-center rounded-lg p-2 text-[19px] dark:text-neutral-200" href="#">
                    <svg className="me-3 block size-4 shrink-0 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Our heroes
                  </a>
    
                  <a className="text-gray-800focus:outline-none flex items-center rounded-lg p-2 text-[19px] dark:text-neutral-200" href="#">
                    <svg className="me-3 block size-4 shrink-0 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Our story
                  </a>
                </div>
              </div>
    
              <div className="mt-2 flex flex-wrap items-center gap-[16px] md:ms-auto md:mt-0">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#23231E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM22 22l-5.5-5.5"></path></svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#23231E" fill="white">
                    <g id="icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm8.59 10c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" /></g>
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#23231E" fill="white">
                    <g id="icon">
                      <g stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.81 2 5.19 5.63m10-3.63 3.62 3.63" />
                        <path d="M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85Z" />
                        <path stroke-linecap="round" d="M9.76 14v3.55m4.6-3.55v3.55M3.5 10l1.41 8.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  };