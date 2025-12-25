import { homeData } from "~/data";
import ImageWithCaption from "~/components/ImageWithCaption";
import abCh10 from "~/assets/ab-ch-1.0.jpeg";
import abCh11 from "~/assets/ab-ch-1.1.jpeg";
import abCh12 from "~/assets/ab-ch-1.2.JPG";
import abCh20 from "~/assets/ab-ch-2.0.png";
import abCh21 from "~/assets/ab-ch-2.1.PNG";
import abCh22 from "~/assets/ab-ch-2.2.jpg";
import Callout from "~/components/Callout";

export default function AboutPage() {
  // Calculate age based on exact birthday: October 5, 2004
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(2004, 9, 5); // Month is 0-indexed, so 9 = October
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12 -mt-4">
        Making conclusions too early is a very easy way to stop learning. I've found curiosity takes you further.
      </p>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          ⌛️ TL;DR
        </h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />

        <div className="flex flex-col gap-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi! I'm Juan. I'm {calculateAge()} and I'm from Spain 🇪🇸, but I’ve
            also lived in the UK 🇬🇧.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love building software products 💻. I'm currently building a cool
            one @{" "}
            <a
              href="https://kiboventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Kibo Ventures
            </a>
            .
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I study Computer Science & AI @{" "}
            <a
              href="https://ie.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              IE University
            </a>
            .
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love music and play guitar in my free time 🎸. One of my dreams is
            to make a music album 🤠.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I like challenging myself and doing endurance sports 🏊‍♂️. Next up:
            my 3rd half marathon in April 2026.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-12">
          📕 My Story (so far…)
        </h2>
        <div className="h-[1px] w-full my-4 bg-gray-200 dark:bg-gray-600" />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 my-2">
          🎬 Making Movies
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I grew up in Madrid, Spain. When I was 12, I started playing around with
          my dad's old camera (a Nikon D90 from 2008). Since then, I made a lot of
          videos, and my dream was to be the next Steven Spielberg.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Later on, I discovered video editing and VFX through YouTube channels
          like{" "}
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
          </a>{" "}
          or{" "}
          <a
            href="https://www.youtube.com/@AuraProds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Auraprods
          </a>
          . I started messing around with my dad's old computer and some very
          janky versions of Premiere Pro, Photoshop, and After Effects.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          With time I started getting decent at editing and was even accepted into a private mentorship community (50 members
          only) from{" "}
          <a
            href="https://www.tiktok.com/@zachking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Zach King
          </a>
          . For a few months, we focused on making creativity a skill rather than a talent and
          how to make it repeatable.
          That mindset ended up being useful far beyond video.
        </p>

        <div className="flex lg:flex-row flex-col justify-center lg:px-0 px-10 my-4 gap-4">
          <ImageWithCaption
            src={abCh10}
            alt="Editing video"
            caption="Me editing a video at 13 years old"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src={abCh12}
            alt="Editing video"
            caption="A project after a year of learning Photoshop"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src={abCh11}
            alt="With Zach King"
            caption="Call with Zach King during the mentorship"
            aspectRatio="10/9"
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Over time, I drifted away from pure cinema and leaned more into video
          editing. I got better. Eventually, I landed a gig filming and editing a
          commercial for Toyota in Zamora, Spain. It was my <b>first paid job ever</b>. I didn’t
          make much money, but I felt like a millionaire.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          After that, I tried to turn freelancing into an agency. I defined a structured process for my services,
          did aggressive outreach for three months, and finally landed
          my first client. It didn’t last long, but it was my first real, face-to-face
          encounter with building a business. And it wouldn't be my last.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-2">
          🛠️ Making Products
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          During late 2023, I teamed up with friends from school to launch{" "}
          <a
            href="https://www.tiktok.com/@larocket.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LaRocket
          </a>{" "}
          - Spain's first rocket stove brand. We bootstrapped and sold our first 20–30 stoves, but
          scale was an issue. We needed capital to reach more customers and our margins were too low in comparison to the speed in which we wanted to grow. 
          After some time, we decided to raise capital and started meeting with angel
          investors and got close to raising over $50k… but failed. It didn’t
          work out, but it taught me more than any win could have. Building the
          tech infrastructure ultimately led me to <b>software engineering</b>.
        </p>

        <div className="flex lg:flex-row flex-col justify-center lg:px-0 px-10 my-4 gap-4">
          <ImageWithCaption
            src={abCh20}
            alt="LaRocket website"
            caption="LaRocket website with its core products"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src={abCh21}
            alt="Pledge beta"
            caption="1st beta version of Pledge"
            aspectRatio="10/9"
          />
          <ImageWithCaption
            src={abCh22}
            alt="Pledge launch"
            caption="Pledge beta launch event"
            aspectRatio="10/9"
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          A few months later, in late 2024, I met a student from my university who
          had a very interesting idea and wanted to turn it into a startup. Not long after, 
          I decided to join the team and we started building{" "}
          <a
            href="https://pledge-landing.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Pledge
          </a>{" "}
          - an app that helps you stop scrolling on social media by “betting on
          yourself.” 
          <br />
          In Pledge, users set a maximum amount of time they are willing to spend on
          social media and a price to pay if they break that rule. If they do, the money
          goes to the{" "}
          <a
            href="https://www.wish.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Make-A-Wish Foundation
          </a> and
          we take a small margin.
          <br />
          <br />
          We launched a beta version for friends and family and not long after, Pledge was chosen as a finalist for{" "}
          <a
            href="https://www.startglobal.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            START Global
          </a>{" "}
          2025 in St. Gallen, Switzerland 🇨🇭. However, weeks before launch, the
          App Store blocked our app, so we never got a chance to launch it to the public.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 mt-10">
          Now...
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm studying a BSc in Computer Science & Artificial Intelligence at{" "}
          <a
            href="https://ie.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            IE University
          </a>
          . I'm a partnerships ambassador at IE Tech & Innovation and president
          and co-founder of the IE Swimming Club.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm also working at{" "}
          <a
            href="https://kiboventures.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Kibo Ventures
          </a>{" "}
          as a software engineering intern, with a secondary role in investment.
          I love being at the intersection of tech and business. I get not only to work on interesting tech projects,
          but also learn about the ins and outs of a VC fund, startup finantials and the startup ecosystem.
          Every day, I get to see some of the most <b>cutting-edge tech in Europe</b>
        </p>

        <Callout 
          content="Anyway... that's me. At least for now :)"
        />
      </div>
    </div>
  );
}

