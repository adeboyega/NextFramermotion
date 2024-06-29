"use client";
import PageWrapper from "../PageWrapper";
import Navbar from "../Navbar";
import shirt from './shirt.jpg'
import Image from "next/image";
export default function page() {
	return (
		<>
			<Navbar />
			<PageWrapper>
				<div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-4 py-4 m-2 text-sm">
					<div className="w-[90%] ">
						<p className="text-sm font-bold">All New</p>
						<h1 className="text-2xl font-bold">All Products</h1>
						<p className="text-sm ">
							There are many variations of passages of Lorem ipsum <br />
							dolor sit amet consectetur adipisicing elit. Aut voluptatum quo
							fugit!
						</p>
					</div>
					<div className="w-full grid grid-cols-4">
						<div className=" p-2 rounded-md ">
							<Image
								src={shirt}
								width={500}
								height={500}
								alt="Picture of the black shirt"
								className="rounded-md"
							/>
							<div className="flex justify-between font-bold"><p>Basic Tee</p> <p className="font-bold">$35</p></div>
							<p>Black</p>
						</div>
						<div className=" p-2 rounded-md ">
							<Image
								src={shirt}
								width={500}
								height={500}
								alt="Picture of the black shirt"
								className="rounded-md"
							/>
							<div className="flex justify-between font-bold"><p>Basic Tee</p> <p className="font-bold">$35</p></div>
							<p>Black</p>
						</div>
						<div className=" p-2 rounded-md ">
							<Image
								src={shirt}
								width={500}
								height={500}
								alt="Picture of the black shirt"
								className="rounded-md"
							/>
							<div className="flex justify-between font-bold"><p>Basic Tee</p> <p className="font-bold">$35</p></div>
							<p>Black</p>
						</div>
						<div className=" p-2 rounded-md ">
							<Image
								src={shirt}
								width={500}
								height={500}
								alt="Picture of the black shirt"
								className="rounded-md"
							/>
							<div className="flex justify-between font-bold"><p>Basic Tee</p> <p className="font-bold">$35</p></div>
							<p>Black</p>
						</div>
						
					</div>
				</div>
			</PageWrapper>
		</>
	);
}
