function Avatar({ src, className }) {
	return (
		<div className={className}>
			<img
				loading="lazy"
				src={src}
				alt="avatar"
				className="h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110"
			/>
		</div>
	);
}

export default Avatar;
