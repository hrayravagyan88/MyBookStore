import React from "react";

const ErrorMessage = ({message}) => {
  return (
    <div className="font-[sans-serif] max-w-md ">
      <p className="text-xs text-red-500 flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14px"
          height="14px"
          fill="currentColor"
          className="mr-2"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z"
            data-original="#000000"
          />
          <path
            d="M373.451 166.965c-8.071-7.337-20.623-6.762-27.999 1.348L224.491 301.509 166.053 242.1c-7.714-7.813-20.246-7.932-28.039-.238-7.813 7.674-7.932 20.226-.238 28.039l73.151 74.361a19.804 19.804 0 0 0 14.138 5.929c.119 0 .258 0 .377.02a19.842 19.842 0 0 0 14.297-6.504l135.059-148.722c7.358-8.131 6.763-20.663-1.347-28.02z"
            data-original="#000000"
          />
        </svg>
        {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
