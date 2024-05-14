

const FAQSection = () => {
  return (
    
      <section className="dark:bg-gray-100 faq-section dark:text-gray-800 max-w-7xl mx-auto mt-20  p-20">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center ">FAQ <span className="text-orange-500">Q</span> uestions</h2>
		<p className="mt-4 mb-8  font-bold text-cyan-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg bg-slate-200">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">1. Who can apply?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Basic requirements:
          <ul>
            <li>Must complete graduation</li>
            <li>Must be from CSE, ICT, or EEE related background</li>
          </ul>
				</p>
			</details>
			<details className="w-full border rounded-lg bg-slate-200">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">2. What is the cost for this training?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">We have no tuition fees, but only Teaching-Learning material fee of 10,000 BDT is required. It is a one-time pay for 13-weeks training.</p>
			</details>
			<details className="w-full border rounded-lg bg-slate-200" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">3. What is the syllabus for the written exam?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Written exam questions will be based on programming, data structure, and algorithms. There will be 5 problems that can be answered using any programming language.</p>
			</details>
      <details className="w-full border rounded-lg bg-slate-200">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">4. Can we share the past written exam questions?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">No, we do not share the past questions. However, if you are proficient at programming in any language, you can easily answer these questions. They are very basic for anyone from CSE or ICT background.</p>
			</details>
      <details className="w-full border rounded-lg bg-slate-200">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">5. What opportunities are available for ITEE FE passers?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">If you are an ITEE FE Full passer, you can bypass the written exam and move directly to interview sessions. If you are an ITEE FE Half passer, you can bypass document screening and get directly selected for the written exam.</p>
			</details>
      <details className="w-full border rounded-lg bg-slate-200">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">6. Do we provide any guidebook or question paper for ITEE FE exam?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">No, we do not. There are question papers available online and at bookstores; you can practice them to prepare for the exam.</p>
			</details>
		</div>
	</div>
</section>

    
  );
};

export default FAQSection;



