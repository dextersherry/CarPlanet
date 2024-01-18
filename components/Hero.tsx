"use client";
import Image from 'next/image'
import CustomButton from './CustomButton';


function Hero() {
    const handleScroll = () => {
    };
    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className='hero__title'>
                    Find, book , or rent a Car-Quickly and Eassily!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car rental experience
                    with our effortless booking process
                </p>
                <CustomButton
                    title="Explore More"
                    containerStyles="bg-red text-white rounded-full mt-10"
                    handleClick={handleScroll} 
                    />
            </div>
            <div className='hero__image-container'>
                <div className="hero__image">
                    <Image src="/hero3.png" alt='hero' fill className='object-contain' />
                    <div className='hero__image-overlay' />
                </div>
            </div>
        </div>
    );
}

export default Hero