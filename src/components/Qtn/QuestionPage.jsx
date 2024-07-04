
import { Disclosure } from "@headlessui/react";

export default function OneColShowHideFaq() {
  const data = [
    {
      id: 1,
      question: "Is this component completely free to use?",
      answer: "No, it should be purchased first.",
    },
    {
      id: 2,
      question: "Can I use it in a commercial project?",
      answer: "Yes, once purchased, you can use it in any projects.",
    },
    {
      id: 3,
      question: "What is your refund policy?",
      answer:
        "If you are unhappy with your purchase for any reason, email us within 90 days and we wll refund you in full, no questions asked.",
    },
    {
      id: 4,
      question: "Do you offer technical support?",
      answer:
        "No, we don't offer technical support for components. Please purchase a support plan to get 6 months of support.",
    },
  ];

  return (
    <>

      <div className="py-5 bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center w-full p-8 mx-auto mt-4 text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            FAQ
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Answer your customers possible questions here, it will
            increase the conversion rate as well as support or chat
            requests.
          </p>
        </div>

        <div className="container p-0 mx-auto xl:px-0">
          <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
            <div>
              {data.map((item) => (
                <div className="mb-5" key={item.id}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200"
                          type="button">
                          <h2 className="text-black">{item.question}</h2>
                          <svg
                            className={`w-5 h-5 text-indigo-500 ${
                              !open ? "transform rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                          {item.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}