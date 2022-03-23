import React from "react";
import {useRouter} from "next/router"
import Link from 'next/link'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
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
const Hero=() =>{
return <div className={style.wrapper}>
    <div className={style.container}>
    <div className={style.contentWrapper}> 
    <div className={style.copyContainer}>
        <div className={style.title}> DISCOVER,COLLECT AND MAKE SOME NFT </div>
        <div className={style.description}>
            This is the largest collection NFT's MarketPlace
        </div>
        <div className={style.ctaContainer}>
            <button className={style.accentedButton}>Explore</button>
            <button className={style.button}>Create</button>

        </div>
    </div>
    <div className={style.cardContainer}>
        <img className="rounded-t-lg" src="https://lh3.googleusercontent.com/H-LDthYRKPWJdIKEI3WrZFFpxetO77jl1ALd3t4BJQ3Qj661B3WfopzTJ1iNtjD4JqjsLLqblkfWNtaHEzRUsCcbLsUZEiVGkNGE=s550" 
        />
        <div className={style.infoContainer}>
            <img 
            className="h-[2.5rem] rounded-full"
            src="https://lh3.googleusercontent.com/a-/AOh14Gh5K0JJVoyigIPlKTXpR5NlyRaD9FHR58hRB0Nd914=s360-p-rw-no" 
            />
        <div className={style.author}>
            <div className={style.name}>Viby</div>
            <a className="text-[#1868b7]"
            href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2682286971963689196555642600990882324412171456684959899575241281247824052230" 
            > Hola </a>
        </div>
        </div>
    </div>
    </div>
    </div>
</div>

}

export default Hero