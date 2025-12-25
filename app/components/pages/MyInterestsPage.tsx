import Callout from "../Callout";

export default function MyInterestsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Interests Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Principles</h2>
          <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-gray-700 dark:text-gray-300">
              <b>Curiosity:</b> You never know what you don't know. Trying new things is the only way to grow.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <b>Storytelling:</b> Whatever I do (apps, projects, anything) I try to wrap it in a compelling narrative. That's what makes people care.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <b>The 1% rule:</b> Plan in decades. Think in years. Work in months. Live in days. 
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <b>Try, fail, try again:</b> Reading helps. Doing teaches.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <b>Feedback and iteration:</b> I pay attention to detail, but value feedback and iteration more.
              <br />
              <div className="ml-4">
                <Callout 
                  content="If you are not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman" 
                  italic={true} 
                />
              </div>
            </li>
          </ol>
        </section>

        {/* Interesting Reads and Watches Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Interesting Reads and Watches</h2>
          <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
          
          {/* Books */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">📚 Books</h3>
            <ul className="space-y-4">
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">$100M Offers:</span> a book that has taught me more about selling and business than any course in university
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Psychology of Money:</span> people are emotional and act accordingly, understand it and use it to your advantage.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Never Split The Difference:</span> from signing a deal to arguing with your friend, everything is a negotiation.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Zero to One:</span> ignore competition, focus on your problem.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">NLP (Neuro Linguistic Programming):</span> words have the power to rewire a person's mind and behavior.
              </li>
            </ul>
          </div>

          {/* Films */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🎬 Films</h3>
            <Callout 
                content="Unlike a lot of people, I also believe that films can change the way you think and see the world." 
                italic={false} 
            />
            <ul className="space-y-4 mt-4">
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">The Secret Life of Walter Mitty:</span> a reminder to escape autopilot, take intentional risks, and design a life you actually want to live.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Good Will Hunting:</span> contains the best ever monologue in cinema history (biased 😂).
              </li>
            </ul>
          </div>
        </section>

        {/* Cool People */}
        {/* <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Cool People</h2>
          <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Guli</li>
            <li>Ben Francis</li>
            <li>Rafael Nadal</li>
            <li>Cristiano Ronaldo (duh, but true)</li>
          </ul>
        </section> */}
      </div>
    </div>
  );
}

