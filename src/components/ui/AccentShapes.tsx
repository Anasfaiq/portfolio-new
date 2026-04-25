interface Props {
  variant:
    | "hero"
    | "circle"
    | "square"
    | "diamond"
    | "black-square"
    | "black-circle";
  className?: string;
}

const AccentShapes = ({ variant, className }: Props) => {
  if (variant === "hero") {
    return (
      <div
        className={`absolute -top-6 -right-6 w-40 h-40 pointer-events-none rotate-12 hidden lg:block ${className}`}
      >
        <div className="relative w-full h-full">
          {/* Kotak solid besar - diresize jadi w-16 h-16 (setara lingkaran) */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-black rotate-12" />

          {/* Kotak outline - diresize jadi w-12 h-12 biar ga kebanting */}
          <div className="absolute top-10 right-20 w-12 h-12 border-2 border-black -rotate-6" />

          {/* Lingkaran outline utama (Benchmark ukuran) */}
          <div className="absolute top-14 -right-2 w-16 h-16 rounded-full border-2 border-black" />

          {/* Titik solid - digedein dikit biar kelihatan balance */}
          <div className="absolute top-24 right-20 w-5 h-5 bg-black rounded-full" />

          {/* Kotak outline miring bawah - digedein jadi w-10 */}
          <div className="absolute bottom-4 -right-8 w-10 h-10 border border-black rotate-45" />
        </div>
      </div>
    );
  }

  if (variant === "circle") {
    return (
      <div className={`absolute w-14 h-14 rounded-full border-2 border-black shadow-[5px_5px_0_#1A1A1A] hidden lg:block ${className}`} />
    );
  }

  if (variant === "square") {
    return (
      <div className={`absolute w-14 h-14 border-2 border-black shadow-[5px_5px_0_#1A1A1A] rotate-12 hidden lg:block ${className}`} />
    );
  }

  if (variant === "diamond") {
    return (
      <div className={`absolute w-14 h-14 border-2 border-black shadow-[5px_5px_0_#1A1A1A] rotate-45 hidden lg:block ${className}`} />
    );
  }

  if (variant === "black-square") {
    return (
      <div className={`absolute w-14 h-14 bg-black hidden lg:block ${className}`} />
    );
  }

  if (variant === "black-circle") {
    return (
      <div className={`absolute w-14 h-14 bg-black rounded-full hidden lg:block ${className}`} />
    );
  }
};

export default AccentShapes;
