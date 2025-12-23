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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">TL;DR</h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
        <div className="flex flex-col gap-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi! I'm Juan, a {calculateAge()}y/o from Spain 🇪🇸, but have also lived in the UK 🇬🇧.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love building software products 💻 - I'm currently building a cool one @ <a href="https://kiboventures.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kibo Ventures</a>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I also love music and playing guitar 🎸. One of my dreams is to make a music album 🤠.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love challenging myself and doing endurance sports 🏊‍♂️. Next up: 3rd 1/2 Marathon.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-12">My Story (so far…)</h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          When I was 12, my parents gave me a camera. Since then, I made a lot of videos and my dream was to be the next Steven Spielberg.
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
            src="/app/assets/ab-ch-1.1.jpeg"
            alt="With Zach King"
            caption="With Zach King during the mentorship"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src="/app/assets/ab-ch-1.2.jpg"
            alt="Editing video"
            caption="First projects using Photoshop"
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
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          That wasn’t the last. Later, I teamed up with friends from school to launch a rocket stove brand.
           We met with angel investors and got close to raising over $50k… but failed. 
           It didn’t work out but it taught me more than any win could have. I learned a lot about what it takes, 
           and building the tech infrastructure for the business is what ultimately led me to <b>software engineering</b>.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ever since then, I've been building software products and always looking for the perfect mix between tech and creativity.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 my-6 rounded-r">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
            <strong className="text-blue-700 dark:text-blue-300">💡 "I'm in" philosophy</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

