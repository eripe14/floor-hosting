export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 mt-10">
            <div className="max-w-6xl mx-auto px-5 py-6 text-xs md:text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
                <p>© {new Date().getFullYear()} Floor Hosting. All rights reserved.</p>
                <p>Made with passion for Rollerite!</p>
            </div>
        </footer>
    );
}
