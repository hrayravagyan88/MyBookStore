import React, { useState } from "react";
const Faq = () => {
  const [bool, setBool] = useState(false);
  const [question, setQuestion] = useState({
    question1: true,
    question2: false,
    question3: false,
  });
  const HandleChange = (name, value) => {
    setQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let toggleClass1 = question.question1
    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    : "text-gray-500 dark:text-gray-400";
  let toggleClass2 = question.question2
    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    : "text-gray-500 dark:text-gray-400";
  let toggleClass3 = question.question3
    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    : "text-gray-500 dark:text-gray-400";

  return (
    <div>
        <div className="container mx-auto mb-6 flex justify-center text-xl">
        <h1>Հաճախ տրվող հարցեր </h1>
      </div>
    <div className="container mx-auto mb-6 flex justify-center text-xl">
        
      <div
        id="accordion-flush"
        data-accordion="collapse"
        className={`${toggleClass1}`}
      >
        <h2 id="accordion-flush-heading-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              HandleChange("question1", !question.question1);
            }}
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span><strong>Ինչ արժե գիրքը?</strong>
            </span>
            <svg
              data-accordion-icon
              className ={`w-3 h-3 shrink-0 ${question.question1 ? 'rotate-0 ' : 'rotate-180'}`} 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className={!question.question1 ? "hidden" : ""}
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Գրքի արժեքը կախված է Ձեր նախընտրած գրքից։ Այս պահին հասանելի է <br/>
            "Կարմիր Գլխարկը" հեքիաթը, որի արժեքն է 15.000 Դրամ, ներառյալ ԱԱՀ-ն։
            </p>
          </div>
        </div>

        <h2 id="accordion-flush-heading-2" className={`${toggleClass2}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              HandleChange("question2", !question.question2);
            }}
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span><strong>Քանի օրից է գիրքը պատրաստ լինում?</strong></span>
            <svg
              data-accordion-icon
              className ={`w-3 h-3 shrink-0 ${question.question2 ? 'rotate-0 ' : 'rotate-180'}`} 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className={!question.question2 ? "hidden" : ""}
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Գիրքը պատվիրելուց, և անմիջապես կանխավճարի 50%ը վճարելուց առավելագույնս 10<br/> աշխատանքային օրվա ընթացքում գիրքը առաքվում է պատվիրատուին։ 
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3" className={`${toggleClass3}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              HandleChange("question3", !question.question3);
            }}
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span>
            <strong>Առաքման պայմանները</strong>
            </span>
            <svg
              data-accordion-icon
              className ={`w-3 h-3 shrink-0 ${question.question3 ? 'rotate-0 ' : 'rotate-180'}`} 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          className={!question.question3 ? "hidden" : ""}
          aria-labelledby="accordion-flush-heading-3"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Առաքումը Երևան քաղաքում անվճար է։ Առաքումը մարզեր կատարվում է ՀայՓոստի միջոցով'<br/>3 աշխատանքային օր և 1000 Դրամ։ Էքսպրես առաքում մարզեր նույն օրը 2000 Դրամ։ 
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
