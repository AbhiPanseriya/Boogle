import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router"
import { useRef } from "react";

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;
		if(!term) return;

		router.push(`/search?term=${term}`);

	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Boogle</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* header */}
			<header className="flex justify-between w-full p-5 text-sm text-gray-700">
				{/* left */}
				<div className="flex items-center space-x-4">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				{/* right */}
				<div className="flex items-center space-x-4">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					{/* icon */}
					<ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

					{/* avatar */}
					<Avatar src="/assets/avatar.jpg" />
				</div>
			</header>

			{/* body */}
			<form className="flex flex-col items-center flex-grow w-4/5 mt-44">
				<Image
					src="/assets/header-image.jpg"
					height={100}
					width={300}
				/>
				<div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						ref={searchInputRef}
						type="text"
						className="flex-grow focus:outline-none"
					/>
					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={search} className="btn">
						Google Search
					</button>
					<button onClick={search} className="btn">
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			{/* footer */}
			<Footer />
		</div>
	);
}
