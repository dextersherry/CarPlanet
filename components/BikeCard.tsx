"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { BikeProps } from "@/types"
import  CustomButton from "./CustomButton"
import { fuels } from "@/constants"
import { calculateBikeRent, generateCarImageUrl } from "@/utils"
import  BikeDetails  from "./BikeDetails"

interface bikeCardProps{
  bike: BikeProps;
}

const BikeCard = ({ bike }: bikeCardProps) => {

  const {make, model, year, transmission,city_mpg,drive,
    highway_mpg,cylinders,combination_mpg,fuel_type,displacement}=bike;
  const bikeRent =calculateBikeRent(city_mpg,year)  
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6  text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
        ₹
        </span>
        {bikeRent}
        <span className="self-end text-[14px] font-medium">
        /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(bike)} alt="car model" fill priority className="object-contain" />
      </div>
      <div className="relative flex w-full  mt-2" >
        <div className="flex group-hover:invisible w-full justify-between text-grey">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/bike-handle.png" alt="steering Wheel" width={30} height={20}/>
          <p className="text-[12px]">
            {transmission==='a'?'Automatic':'Manual '}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/tire.svg" alt="steering Wheel" width={30} height={20}/>
          <p className="text-[12px] uppercase">
            {drive}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/gas.svg" alt="steering Wheel" width={30} height={20}/>
          <p className="text-[12px]">
          {city_mpg} kmpl
          </p>
        </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
          title="View More"
          containerStyles="w-full py-[16px] rounded-full bg-red "
          textStyles="text-white text-[14px] leading-[17px] font-bold" 
          rightIcon="/right-arrow.svg"
          handleClick={()=> setIsOpen(true)}
          />
        </div>
      </div>
      <BikeDetails isOpen={isOpen} closeModal={()=>
        setIsOpen(false)} bike={bike} />
    </div>
  )
}

export default BikeCard
