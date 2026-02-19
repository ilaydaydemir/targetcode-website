export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="text-clay-teal">Target</span>Code
            </a>
            <p className="text-sm text-gray-400 mt-1">
              Self-evolving GTM engine for modern sales teams.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="mailto:hello@targetcode.io" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TargetCode. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
