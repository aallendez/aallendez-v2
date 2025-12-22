

export function Footer() {
    return (
        <div className="absolute bottom-0 w-full p-5 flex flex-col gap-2 items-center justify-center">
            <p className="lg:hidden md:hidden text-center text-xs text-gray-400 dark:text-gray-400">
                I strongly recommend viewing this website on a desktop :)
            </p>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} 🇪🇸 Built by Juan in Madrid, Spain.
            </p>
        </div>
    );
}