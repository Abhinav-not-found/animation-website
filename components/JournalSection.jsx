"use client";
import { gsap } from "gsap";
import BuildingImage from "../public/building.jpeg";
import BuildingImage2 from "../public/building2.jpeg";
import BuildingImage3 from "../public/building3.jpeg";
import { Dot } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export const JournalSection = () => {
	const content = [
		{
			image: BuildingImage,
			heading: "designing for timelessness",
			para: "architecture should outlast trends, At Arcform Studio, we explore how strong forms, natural balance, and subtle elegance come together.",
		},
		{
			image: BuildingImage3,
			heading: "space that breathe",
			para: "architecture is more than wall and roofs - it's about creating spaces that inspire calm, connection, and a sense of belonging.",
		},
		{
			image: BuildingImage2,
			heading: "the silence of form",
			para: "in the world overwhelmed by noise, architecture can offer serenity through restraint, clarity, and balance.",
		},
	];

	return (
		<div className='h-[150vh] flex flex-col bg-white text-black pt-10'>
			<div className='flex items-center mb-4'>
				<Dot className='size-8' />
				<p className='uppercase font-semibold -ml-2'>Journals</p>
			</div>
			<div className='flex justify-between items-end'>
				<div className='tracking-[-0.2em]'>
					<p className='uppercase font-bold text-7xl'>Beyond the </p>
					<p className='uppercase font-bold text-7xl'>Blueprint</p>
				</div>
				<button className='uppercase bg-black text-white rounded-full py-3 px-6 text-xs cursor-pointer'>
					View All Journals
				</button>
			</div>
			<div className='h-full w-full mt-10 flex justify-between gap-4'>
				{content?.map((item, index) => (
					<Card
						key={index}
						image={item.image}
						heading={item.heading}
						para={item.para}
					/>
				))}
			</div>
		</div>
	);
};

const Card = ({ image, heading, para }) => {
	const hoverOnAnimation = () => {
		gsap.to(textRef.current, {
			marginTop: -40,
		});
		gsap.to(bgRef.current, {
			y: 80,
		});
	};
	const hoverOffAnimation = () => {
		gsap.to(textRef.current, {
			marginTop: 0,
		});
		gsap.to(bgRef.current, {
			y: 0,
		});
	};
	const textRef = useRef();
	const bgRef = useRef();
	return (
		<div
			onMouseEnter={hoverOnAnimation}
			onMouseLeave={hoverOffAnimation}
			className='flex flex-col w-full h-fit bg-red-50 cursor-pointer relative'
		>
			<div className=''>
				<Image
					src={image}
					alt='journal'
					className='w-full h-auto object-cover'
					priority
				/>
			</div>
			<div ref={textRef} className='w-full bg-white text-black p-2'>
				<p className='uppercase text-xs font-bold'>{heading || "text"}</p>
				<p className="first-letter:uppercase text-xs mt-2">{para || "para"}</p>
			</div>
			<div ref={bgRef} className='bg-white w-full h-20 absolute -bottom-8'></div>
		</div>
	);
};
