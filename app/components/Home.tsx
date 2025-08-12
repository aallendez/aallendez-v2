import { useEffect, useRef, useState } from "react";
import { homeData } from "~/data";
import {Tooltip} from "@heroui/tooltip";
import { ArrowDown } from "lucide-react";
import { animate, onScroll, createScope, createSpring, createDraggable, Scope } from 'animejs';

export default function Home() {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);
    const cleanupRef = useRef<(() => void) | null>(null);
    const [ rotations, setRotations ] = useState(0);
    
    // useEffect(() => {
    //     scope.current = anime.createScope({ root }).add(self => {
    //         // Social media links animation on scroll
    //         anime({
    //             targets: '.social-link',
    //             scale: [0, 1],
    //             opacity: [0, 1],
    //             translateY: ['2rem', 0],
    //             easing: 'easeOutQuart',
    //             duration: 800,
    //             delay: (el, i) => i * 150,
    //             autoplay: anime.onScroll({
    //                 container: '.scroll-container',
    //                 enter: 'bottom-=100 top',
    //                 leave: 'top+=100 bottom',
    //                 sync: true,
    //             })
    //         });

    //         // Profile picture animation on scroll
    //         anime({
    //             targets: '.profile-picture',
    //             scale: [0.8, 1],
    //             opacity: [0, 1],
    //             translateY: ['-2rem', 0],
    //             easing: 'easeOutQuart',
    //             duration: 1000,
    //             autoplay: anime.onScroll({
    //                 container: '.scroll-container',
    //                 enter: 'bottom-=50 top',
    //                 leave: 'top+=60 bottom',
    //                 sync: true,
    //             })
    //         });

    //         // Name and bio animation on scroll
    //         anime({
    //             targets: '.name-bio',
    //             opacity: [0, 1],
    //             translateY: ['1rem', 0],
    //             easing: 'easeOutQuart',
    //             duration: 800,
    //             delay: 300,
    //             autoplay: anime.onScroll({
    //                 container: '.scroll-container',
    //                 enter: 'bottom-=50 top',
    //                 leave: 'top+=60 bottom',
    //                 sync: true,
    //             })
    //         });
    //     });

    //     return () => {
    //         if (scope.current) {
    //             scope.current.revert();
    //         }
    //     };
    // }, []);

    useEffect(() => {
        scope.current = createScope({ root }).add( self => {
        
          // Every anime.js instances declared here are now scopped to <div ref={root}>
    
          // Create click event listener for bounce animation
          const profilePicElement = root.current?.querySelector('.profilePic');
          if (profilePicElement) {
            const handleProfilePicClick = () => {
              animate('.profilePic', {
                scale: [
                  { to: 1.25, ease: 'inOut(3)', duration: 200 },
                  { to: 1, ease: createSpring({ stiffness: 300 }) }
                ],
                loop: false,
              });
            };
            
            profilePicElement.addEventListener('click', handleProfilePicClick);
            
            // Store cleanup function for click listener
            const originalCleanup = cleanupRef.current;
            cleanupRef.current = () => {
              originalCleanup?.();
              profilePicElement.removeEventListener('click', handleProfilePicClick);
            };
          }
          
          // Make the logo draggable around its center
          createDraggable('.profilePic', {
            container: [0, 0, 0, 0],
            releaseEase: createSpring({ stiffness: 200 })
          });
    
          // Register function methods to be used outside the useEffect
          self?.add('rotateLogo', (i) => {
            animate('.logo', {
              rotate: i * 360,
              ease: 'out(4)',
              duration: 1500,
            });
          });

          // Create a scroll animation for linkedin using scroll event
          const linkedinElement = root.current?.querySelector('.linkedin');
          if (linkedinElement) {
            const handleScroll = () => {
              const scrollTop = root.current?.scrollTop || 0;
              const scrollHeight = root.current?.scrollHeight || 0;
              const clientHeight = root.current?.clientHeight || 0;
              const scrollProgress = scrollTop / (scrollHeight - clientHeight);
              
              // Animate based on scroll progress - diagonal movement
              animate('.linkedin', {
                x: `${scrollProgress * 20}rem`,
                y: `${scrollProgress * -15}rem`,
                opacity: [0, 1],
                ease: 'linear',
                duration: 0,
                sync: .25,
                debug: true,
              });
            };
            
            root.current?.addEventListener('scroll', handleScroll);
            
            // Store cleanup function in a ref
            cleanupRef.current = () => root.current?.removeEventListener('scroll', handleScroll);
          }

          // Create a scroll animation for linkedin using scroll event
          const twitterElement = root.current?.querySelector('.twitter');
          if (twitterElement) {
            const handleScroll = () => {
              const scrollTop = root.current?.scrollTop || 0;
              const scrollHeight = root.current?.scrollHeight || 0;
              const clientHeight = root.current?.clientHeight || 0;
              const scrollProgress = scrollTop / (scrollHeight - clientHeight);
              
              // Animate based on scroll progress - diagonal movement
              animate('.twitter', {
                x: `${scrollProgress * 20}rem`,
                y: `${scrollProgress * 15}rem`,
                opacity: [0, 1],
                ease: 'linear',
                duration: 0,
                sync: .25,
                debug: true,
              });
            };
            
            root.current?.addEventListener('scroll', handleScroll);
            
            // Store cleanup function in a ref
            cleanupRef.current = () => root.current?.removeEventListener('scroll', handleScroll);
          }
    
        });
    
        // Properly cleanup all anime.js instances declared inside the scope
        return () => {
          scope.current?.revert();
          // Cleanup scroll event listener
          cleanupRef.current?.();
        }
    
      }, []);

    return (
        <div ref={root} className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 relative overflow-y-auto">
            {/* Virtual scroll container for animations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="h-[200vh] w-full"></div>
            </div>
            
            <div className="fixed w-64 text-center mx-auto z-10">
                {/* Profile Picture */}
                <div id="profile" className="w-full cursor-pointer space-y-3">
                    {/* Profile Picture arrow */}
                    <div className="flex flex-col items-center justify-center w-full">
                        Press below!
                        <div className="animate-bounce-down">
                            <ArrowDown />
                        </div>
                    </div>

                    <img
                        src={homeData.profilePicture}
                        alt="Profile Picture"
                        className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover pfp-hover-scale profilePic logo"
                    />

                    {/* Name & Bio */}
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {homeData.name}
                        </h1>
                        <p className="text-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {homeData.bio}
                        </p>
                    </div>
                </div>


            </div>
            {/* Social Links */}
            <div className="fixed flex justify-center">
            {homeData.socialLinks.map((link) => (
                <Tooltip key={link.name} content={<p className="text-xs">{link.name}</p>} offset={-5}>
                    <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-200 ${link.name === 'LinkedIn' ? 'linkedin' : ''} ${link.name === 'Twitter' ? 'twitter' : ''} ${link.color}`}
                    aria-label={link.name}
                    >
                    <link.icon className="w-6 h-6" />
                    </a>
                </Tooltip>
            ))}
            </div>
        </div>
    );
} 