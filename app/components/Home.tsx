import React, { useEffect, useRef, useState } from "react";
import { homeData, menuItems, pageIntroductions } from "~/data";
import {Tooltip} from "@heroui/tooltip";
import { ArrowDown } from "lucide-react";
import { animate, onScroll, createScope, createSpring, createDraggable, Scope } from 'animejs';
import PageContainer from "./PageContainer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SocialsPage from "./pages/SocialsPage";

export default function Home() {
    const root = useRef<HTMLDivElement>(null);
    const profileContainerRef = useRef<HTMLDivElement>(null);
    const homePageRef = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);
    const cleanupRef = useRef<(() => void) | null>(null);
    const hasNavigatedRef = useRef(false);
    const [ rotations, setRotations ] = useState(0);
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ activePage, setActivePage ] = useState<string | null>(null);
    
    
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
              // Also toggle radial menu state
              setMenuOpen(prev => !prev);
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

    // Animate radial menu open/close on state change
    useEffect(() => {
        const container = profileContainerRef.current;
        if (!container) return;

        const items = Array.from(container.querySelectorAll('.radial-item')) as HTMLElement[];
        if (items.length === 0) return;

        const xRadius = 600; // horizontal spread in px (slightly expanded)
        const yRadius = 220; // vertical spread in px (reduced to avoid going out of frame)
        const total = items.length;

        if (menuOpen) {
            // Distribute items only on the left and right arcs, avoiding top/bottom
            const rightCount = Math.ceil(total / 2);
            const leftCount = total - rightCount;

            // Right side: angles from -60° to 60° (in radians: [-π/3, π/3])
            const rightAngles = Array.from({ length: rightCount }, (_, i) => {
                const t = rightCount === 1 ? 0.5 : i / (rightCount - 1);
                return -Math.PI / 3 + t * (2 * Math.PI / 3);
            });

            // Left side: angles from 120° to 240° (in radians: [2π/3, 4π/3])
            const leftAngles = Array.from({ length: leftCount }, (_, i) => {
                const t = leftCount === 1 ? 0.5 : i / (leftCount - 1);
                return (2 * Math.PI / 3) + t * (2 * Math.PI / 3);
            });

            const angles = [...rightAngles, ...leftAngles];

            items.forEach((item, index) => {
                const angle = angles[index] ?? 0;
                const x = Math.cos(angle) * xRadius;
                const y = Math.sin(angle) * yRadius;

                animate(item, {
                    x,
                    y,
                    opacity: [0, 1],
                    scale: [0.6, 1],
                    ease: 'out(3)',
                    duration: 450,
                    delay: index * 50,
                });

                // Add subtle levitation animation after the initial positioning
                setTimeout(() => {
                    animate(item, {
                        y: [y, y - 8, y - 4, y - 12, y],
                        rotate: [0, 1, -0.5, 0.5, 0],
                        ease: 'inOut(2)',
                        duration: 10000,
                        loop: true,
                        delay: index * 800,
                    });
                }, 500 + (index * 50)); // Start after initial animation completes
            });
        } else {
            items.forEach((item, index) => {
                animate(item, {
                    x: 0,
                    y: 0,
                    opacity: [1, 0],
                    scale: [1, 0.6],
                    ease: 'in(3)',
                    duration: 300,
                    delay: index * 25,
                });
            });
        }
    }, [menuOpen]);

    // Animate home page slide when a page is opened/closed
    useEffect(() => {
        if (!homePageRef.current) return;

        // Set initial position without animation only on very first render (when activePage is null)
        if (!hasNavigatedRef.current && activePage === null) {
            homePageRef.current.style.transform = 'translateX(0%)';
            return;
        }

        // Mark that we've navigated once activePage becomes truthy
        if (activePage !== null) {
            hasNavigatedRef.current = true;
        }

        if (activePage) {
            // Slide home page to the left
            animate(homePageRef.current, {
                x: ['0%', '-100%'],
                ease: 'inOut(3)',
                duration: 1000,
            });
        } else if (hasNavigatedRef.current) {
            // Slide home page back in from the left (only if we've navigated before)
            animate(homePageRef.current, {
                x: ['-100%', '0%'],
                ease: 'inOut(3)',
                duration: 1000,
            });
        }
    }, [activePage]);

    // Close menu on outside click or Escape
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!menuOpen) return;
            const target = e.target as Node;
            if (profileContainerRef.current && !profileContainerRef.current.contains(target)) {
                setMenuOpen(false);
            }
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                if (activePage) {
                    setActivePage(null);
                }
            }
        };
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('click', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [menuOpen, activePage]);

    const handleMenuItemClick = (key: string) => {
        setMenuOpen(false);
        setActivePage(key);
    };

    const handleBack = () => {
        setActivePage(null);
    };

    // Map page keys to components
    const pageComponents: Record<string, React.ComponentType> = {
        'about': AboutPage,
        'projects': ProjectsPage,
        'contact': ContactPage,
        'socials': SocialsPage,
    };

    return (
        <div ref={root} className="min-h-screen dark:text-white w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Home Page */}
            <div 
                ref={homePageRef}
                className="absolute inset-0 w-full h-full flex items-center justify-center px-4 overflow-y-auto"
            >
                <div className="fixed text-center mx-auto z-10">
                    {/* Profile Picture */}
                    <div id="profile" className="w-full space-y-4">
                        {/* Profile Picture arrow */}
                        <div className="flex flex-col items-center justify-center w-full">
                            Press below!
                            <div className="animate-bounce-down">
                                <ArrowDown />
                            </div>
                        </div>

                        <div ref={profileContainerRef} className="relative w-48 h-48 mx-auto">
                            {/* Radial menu items (initially centered; animated outward) */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="relative w-full h-full">
                                    {menuItems.map((item, index) => (
                                        <button
                                            key={item.key}
                                            className={`cursor-pointer hover:shadow-md transition-all duration-300 radial-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur px-3 py-1 text-sm text-gray-900 dark:text-gray-100 shadow-sm border border-black/5 dark:border-white/5 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleMenuItemClick(item.key);
                                            }}
                                            aria-label={item.label}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <img
                                src={homeData.profilePicture}
                                alt="Profile Picture"
                                className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover pfp-hover-scale profilePic logo relative z-10"
                            />
                        </div>

                        {/* Name & Bio */}
                        <div className="">
                            <h1 className="text-3xl font-bold mb-4">
                            {homeData.name}
                            </h1>
                            <div className="flex items-center justify-center gap-6 cursor-pointer">
                              {homeData.socialLinks.map((link, index) => (
                                <div key={link.name} className={`${link.color}  transition-all duration-300 flex items-center justify-center `} style={{ animationDelay: `${index * 0.5}s` }}>
                                    <link.icon onClick={() => window.open(link.url, '_blank')} className="w-6 h-6" />
                                </div>
                              ))}
                            </div>
                            <p className="text-md text-gray-600 dark:text-gray-300 mt-2 mb-4 leading-relaxed">
                            {homeData.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Containers for each menu item */}
            {menuItems.map((item) => {
                const PageComponent = pageComponents[item.key];
                if (!PageComponent) return null;
                
                return (
                    <PageContainer
                        key={item.key}
                        isActive={activePage === item.key}
                        onBack={handleBack}
                        title={item.label}
                        introduction={pageIntroductions[item.key]?.text}
                    >
                        <PageComponent />
                    </PageContainer>
                );
            })}
        </div>
    );
} 