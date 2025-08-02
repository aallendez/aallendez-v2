

export function Footer() {
    return (
        <div className="absolute bottom-0 w-full h-12 flex items-center justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} 🇪🇸 Built by <a href="/" className="text-blue-500 underline">Juan</a> in Madrid, Spain.
            </p>
        </div>
    );
}