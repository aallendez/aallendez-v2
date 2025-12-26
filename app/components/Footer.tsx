

export function Footer() {
    return (
        <div className="absolute bottom-0 w-full p-5 flex flex-col gap-2 items-center justify-center">
            <p className="lg:hidden md:hidden text-center text-xs text-gray-400 dark:text-gray-400">
                I strongly recommend viewing this website on a desktop :)
            </p>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} 🇪🇸 Built by Juan in Madrid, Spain.
            </p>
            <div className="hidden md:flex items-center justify-center gap-2">
                <p className="text-center text-xs text-gray-400 dark:text-gray-400">
                    This website is <b>v2</b>. See <a href="https://personal-website-rosy-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-400 dark:text-blue-300 hover:underline">v1.</a>
                </p>
                <span className="text-center text-xs text-gray-400 dark:text-gray-400">•</span>
                <p className='text-center text-xs text-gray-400 dark:text-gray-400'>Last updated: 23/12/2025</p>
            </div>
            
        </div>
    );
}