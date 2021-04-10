import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const [searchValue, setSearchValue] = useState(router.query.term);
	const search = (e) => {
		e.preventDefault();
		const term = searchValue;

		if (!term) return;
		router.push(`/search?term=${term}`);
	};

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex items-center w-full p-6">
				<Image
					src="/assets/header-image.jpg"
					height={40}
					width={120}
					className="cursor-pointer"
					onClick={() => router.push("/")}
				/>
				<form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
					<input
						type="text"
						className="flex-grow w-full focus:outline-none"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					{searchValue && (<XIcon
						className="text-gray-500 transition duration-100 transform cursor-pointer h-7 hover:scale-125 sm:mr-3"
						onClick={() => setSearchValue('')}
					/>)}
					<MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
					<SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
					<button onClick={search} hidden type="submit">
						Search
					</button>
				</form>
				<Avatar className="ml-auto" src="/assets/avatar.jpg" />
			</div>
			{/* header options */}
			<HeaderOptions />
		</header>
	);
}

export default Header;
