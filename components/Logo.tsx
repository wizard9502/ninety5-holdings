import Link from "next/link";

type LogoProps = {
  variant?: "full" | "mark" | "compact";
  className?: string;
  href?: string;
};

export function Logo({ variant = "full", className = "", href = "/" }: LogoProps) {
  if (variant === "mark") {
    return (
      <Link href={href} className={`inline-flex items-center ${className}`}>
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-black">
          <span className="text-[22px] font-bold leading-none tracking-tight">5</span>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={href} className={`inline-flex items-center gap-2.5 group ${className}`}>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
          <span className="text-lg font-bold leading-none">5</span>
        </div>
        <span className="text-base font-semibold tracking-tight text-white">
          Ninety<span className="text-zinc-400">5</span>
        </span>
      </Link>
    );
  }

  // Full logo matching the provided design
  return (
    <Link href={href} className={`inline-flex flex-col group ${className}`}>
      <div className="flex items-center">
        <span className="text-[26px] font-bold tracking-tight text-white leading-none">
          Ninety
        </span>
        <div className="ml-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-white">
          <span className="text-[18px] font-bold leading-none text-black">5</span>
        </div>
      </div>
      <span className="mt-1 text-[10px] font-medium tracking-[0.35em] text-zinc-400 uppercase">
        Holdings
      </span>
    </Link>
  );
}
