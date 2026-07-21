import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/pbi100-logo-transparent-2.png"
        alt="Palm Beach Influence 100 logo"
        width={218}
        height={60}
        className="h-[60px] w-auto object-contain"
      />
    </div>
  );
}
