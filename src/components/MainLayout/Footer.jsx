import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto w-full py-10 border-t border-gray-200 bg-[#1e5751]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <ul>
          <li  className="cursor-pointer inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <a
              className="inline-flex gap-x-2 text-sm text-white hover:text-gray-200 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Our Story
            </a>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <a
              className="inline-flex gap-x-2 text-sm text-white hover:text-gray-200 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Contact US
            </a>
          </li>
          <NavLink to="/questions">
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
            <a
              className="inline-flex gap-x-2 text-sm text-white hover:text-gray-200 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          </NavLink >
        </ul>
        <NavLink to="/deliveryInfo">
        <div className="text-center cursor-pointer">
          <p className="text-sm text-white hover:text-gray-200">
            Delivery info
          </p>
        </div>
        </NavLink>
        <div className="md:text-end space-x-2">
          <a
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:text-gray-200 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
