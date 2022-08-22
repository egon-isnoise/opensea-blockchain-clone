import React from 'react';
import profilePic from '../assets/xi.jpg';

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/-PUtoNn_tfmpS2yVdkl3pDeVN-fmuIfX7Qv4RyzkwcGR-Sz1bq3M_nqJyroE-dz929dGQoFedkPIiITIgKTPH21-he7MbnnRNqKmkg=w600')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }


const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Discover, collect, and sell extraordinary NFTs
                        </div>
                        <div className={style.description}>
                            OpenNoise is the world&apos;s first and largest NFT marketplace
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Create</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img className="rounded-t-lg" 
                        src="https://lh3.googleusercontent.com/bVyqQVVJZ1DHCqr-i7IoX5LaXPzQomsBAh-jANjHflX9nIag1F_JZN4wBD4mzDr-dZFJgRwIYSbbr-YWJWrxJ6e84A6lxoyLnwRHPmI=w600" 
                        alt="" />
                        <div className={style.infoContainer}>
                            <img 
                            className='h-[2.25rem] rounded-full'
                            src='https://pbs.twimg.com/profile_images/1539250713297035264/ja7EABSi_400x400.jpg' 
                            alt="" 
                            />
                            <div className={style.author}>
                                <div className={style.name}>Xi</div>
                                <a 
                                className="text-[#1868b7]"
                                href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/98258478562022749723341604631728697889839688210287296639137764932378238648321"
                                target='_blank'
                                >
                                    Figueres
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;