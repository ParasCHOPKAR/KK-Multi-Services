import React from 'react';
import { Wrench } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative flex items-center justify-center w-12 h-12 bg-kk-red rounded-t-xl rounded-br-none rounded-bl-xl overflow-hidden shadow-sm" style={{ clipPath: 'polygon(50% 0%, 100% 40%, 100% 100%, 0 100%, 0 40%)' }}>
        <div className="absolute bottom-0 w-full h-1/2 bg-kk-blue z-0 border-t-2 border-white/20"></div>
        <Wrench className="relative z-10 text-white w-6 h-6 -rotate-45" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[20px] font-black text-kk-blue leading-none tracking-tight">KK MULTI</span>
        <span className="text-[20px] font-black text-kk-blue leading-none tracking-tight mt-[1px]">SERVICES</span>
      </div>
    </div>
  );
}
