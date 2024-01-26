import { cn } from '@/lib/utils'
import React, { Fragment } from 'react'
import Image from 'next/image';
import { ScalarAdvantageContentItem } from '@/lib/constants/scalar-advantage-content';

interface AdditionalProps {
  item: ScalarAdvantageContentItem,
  size: number
}

const AdvantageItem = ({ item, size }: AdditionalProps) => {
  return (
    <Fragment>
      {/* Mobile */}
      <div className={`grid grid-cols-2 lg:hidden gap-[10px] px-[30px] py-[18px] border-b border-neutral-12 z-10`}>
        <div className={cn("flex flex-col gap-[28px] item-start")}>
          <Image
            src={item.imageSmall.image}
            width={item.imageSmall.width}
            height={item.imageSmall.height}
            alt='Logo'
            className={cn('md:hidden select-none')}
          />

          <Image
            src={item.imageLarge.image}
            width={item.imageLarge.width}
            height={item.imageLarge.height}
            alt='Logo'
            className={cn('hidden md:block select-none')}
          />

          <div className={cn("flex flex-col")} >
            <p className={cn("font-normal text-[16px] leading-[24px] text-neutral-6")}>{item.dataMobile[0].title}</p>
            <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>{item.dataMobile[0].data}</label>
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div className={cn("flex flex-col")} >
            <p className={cn("font-normal text-[16px] leading-[24px] text-neutral-6")}>{item.dataMobile[1].title}</p>
            <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>{item.dataMobile[1].data}</label>
          </div>

          <div className={cn("flex flex-col")} >
            <p className={cn("font-normal text-[16px] leading-[24px] text-neutral-6")}>{item.dataMobile[2].title}</p>
            <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>{item.dataMobile[2].data}</label>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={`hidden lg:flex flex-col jusitfy-center gap-[40px] px-[30px] py-[18px] border-none z-10 2xl:absolute`}
        style={size >= 1536 ? item.position : {}}
      >
        <div className={cn("flex flex-col gap-[40px] items-center")}>
          <Image
            src={item.imageSmall.image}
            width={item.imageSmall.width}
            height={item.imageSmall.height}
            alt='Logo'
            className={cn('md:hidden select-none')}
          />

          <Image
            src={item.imageLarge.image}
            width={item.imageLarge.width}
            height={item.imageLarge.height}
            alt='Logo'
            className={cn('hidden md:block select-none')}
          />
        </div>

        {item.dataDesktop.map((item, i) => (
          <div className={cn("flex flex-col items-center")} key={i}>
            <p className={cn("font-normal text-[20px] leading-[30px] text-neutral-6")}>{item.title}</p>
            <label className={cn("font-bold text-[28px] leading-[40px] text-white")}>{item.data}</label>
          </div>
        ))}
      </div>
    </Fragment>

  )
}

export default AdvantageItem