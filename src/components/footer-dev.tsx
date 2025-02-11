export default function DevFooter() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-pastel-green-500 bg-gradient-to-br from-pastel-green-100 via-pastel-green-200 to-pastel-green-300 py-6 shadow-lg">
      {/* Wavy top border */}
      <div className="absolute -top-8 left-0 h-8 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBmaWxsPSIjNWI4Yzc1IiBkPSJNMCAxMDAgQyAyMCAwLCA0MCAwLCAxMDAgMTAwIFoiLz48L3N2Zz4=')]"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="font-poppins text-lg text-pastel-green-900">
          Website created by{' C.D. Totten '}
          <a
            href="https://centraloregonwebdesigns.com"
            className="rounded-lg bg-white/20 px-3 py-1 font-semibold text-pastel-green-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/40 hover:text-pastel-green-900 hover:shadow-md"
          >
            Central Oregon Web Design
          </a>
        </p>
      </div>
    </footer>
  );
}
