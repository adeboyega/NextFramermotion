"use client";
import PageWrapper from "../PageWrapper";
import Navbar from "../Navbar";
export default function page() {
	return (
		<>
    <Navbar />
			<PageWrapper>
				<div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-4 py-4 m-2 text-sm">Contact Page</div>
			</PageWrapper>
		</>
	);
}
