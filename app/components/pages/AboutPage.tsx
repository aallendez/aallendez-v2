import { homeData } from "~/data";
import ImageWithCaption from "~/components/ImageWithCaption";

export default function AboutPage() {
  // Calculate age based on exact birthday: October 5, 2004
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(2004, 9, 5); // Month is 0-indexed, so 9 = October
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12 -mt-4">
        This is one of my core principles. When you're judgmental you limit yourself from learning and trying new things.
      </p>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">⌛️ TL;DR</h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
        <div className="flex flex-col gap-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi! I'm Juan. I'm {calculateAge()} and I'm from Spain 🇪🇸, but have also lived in the UK 🇬🇧.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love building software products 💻 - I'm currently building a cool one @ <a href="https://kiboventures.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kibo Ventures</a>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I study Computer Science @ <a href="https://ie.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">IE University</a>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love music and play guitar in my free time 🎸. One of my dreams is to make a music album 🤠.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I like challenging myself and doing endurance sports 🏊‍♂️. Next up: 3rd 1/2 Marathon.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-12">📕 My Story (so far…)</h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 my-2">🎬 Making Movies</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        I grew up in Madrid, Spain. When I was 12, I started playing around with my dad's old camera (a Nikon D90 from 2008). Since then, I made a lot of videos and my dream was to be the next Steven Spielberg.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Later on, I discovered video editing and VFX through youtube channels like{" "}
          <a 
            href="https://www.youtube.com/@Corridor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Corridor Digital
          </a>
          ,{" "}
          <a 
            href="https://www.youtube.com/@CinecomCrew" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Cinecom.net
          </a>
          {" "}or{" "}
          <a 
            href="https://www.youtube.com/@AuraProds" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Auraprods
          </a>
          {" "}and I started messing around with my dad's old computer and some very janky Premiere Pro, Photoshop and After Effects.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I was even accepted to a private mentorship (50 members only) community from{" "}
          <a 
            href="https://www.tiktok.com/@zachking" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Zach King
          </a>
          {" "}. For two months, we focused on turning creativity into actual videos, but more importantly,
           on how to think creatively in a structured way. 
           That mindset ended up being very useful far beyond video.
        </p>
        <div className="flex justify-center my-4 gap-4">
          <ImageWithCaption
            src="/app/assets/ab-ch-1.0.jpeg"
            alt="Editing video"
            caption="Me editing a video at 13 years old"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src="/app/assets/ab-ch-1.2.jpg"
            alt="Editing video"
            caption="A project after a year of learning Photoshop"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src="/app/assets/ab-ch-1.1.jpeg"
            alt="With Zach King"
            caption="Call with Zach King during the mentorship"
            aspectRatio="10/9"
          />
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Over time, I drifted away from pure cinema and leaned more into video editing. 
          I got better. Eventually, I landed a gig filming and editing a commercial for Toyota. 
          It was my <b>first paid job ever</b>. I didn’t make much money, but I felt like a millionaire
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        After that, I tried to turn freelancing into an agency. I defined my services, 
        did aggressive outreach for three months, and finally closed one client.
         It didn’t last long but it was my first real, face-to-face encounter with building a business
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-2">🛠️ Making Products</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          That wasn’t the last. During late 2023, I teamed up with friends from school to 
          launch <a href="https://www.tiktok.com/@larocket.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LaRocket</a> - 
          Spain's first rocket stove brand.
          We sold our first 20-30 stoves but scale was an issue. After some time, we started meeting with angel investors and got close to raising over $50k… but failed. 
           It didn’t work out but it taught me more than any win could have. I learned a lot about what it takes, 
           and building the tech infrastructure for the business is what ultimately led me to <b>software engineering</b>.
        </p>
        <div className="flex justify-center my-4 gap-4">
          <ImageWithCaption
            src="/app/assets/ab-ch-2.0.png"
            alt="Editing video"
            caption="LaRocket website with it's core products"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src="/app/assets/ab-ch-2.1.png"
            alt="Editing video"
            caption="1st beta version of Pledge"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src="/app/assets/ab-ch-2.2.jpg"
            alt="With Zach King"
            caption="Pledge beta launch event"
            aspectRatio="10/9"
          />
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          A few months later, during late 2024, I met a student from my university who had a very interesting idea and wanted to build a startup.
          After talking about the idea I decided to join the team and we started 
          building <a href="https://pledge-landing.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Pledge</a> -
          an app that helps you stop scrolling on social media by "betting on yourself". The idea was to for a user to set up a specific max time they were willing to spend on social media
          and a price to pay if they broke that rule. If they broke the rule, the user would pay the pledge and that money would go 
          to <a href="https://www.wish.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Make-A-Wish foundation</a>.
          <br /><br />
          During that time, Pledge was chosen as finalist for <a href="https://www.startglobal.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">START Global</a> 2025 at St Gallen, Switzerland 🇨🇭.
          However, weeks before the launch the app store blocked our app so we never got a chance to launch it outside our beta group.

        </p>


        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 mt-10">Now...</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm studying a BSc in Computer Science & Artificial Intelligence 
          at <a href="https://ie.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">IE University</a>.
          At IE, I'm partnerships ambassador at IE Tech & Innovation. We organize events with tech companies and interesting people from the space. I'm also president and co-founder of the IE Swimming Club.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm also working
          at <a href="https://kiboventures.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kibo Ventures</a> as
          a software engineer intern while also having a secondary role in investment.
          Everyday I see some of the coolest and most <b>cutting-edge tech in Europe</b> which is so inspiring. I also get to meet the best founders and investors. Just watching them teaches you so much. <br/> For any student out there 
          who wants to do cool software projects but also learn and breathe the business side, I could not recommend this more.
        </p>
      </div>
    </div>
  );
}

