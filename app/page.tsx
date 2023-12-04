import { Magnetic } from "@animation";

export default function App() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<Magnetic>
				<h1 className="cursor-pointer text-[20px] bg-black text-white px-6 py-3 text-center rounded-lg">
					HOME
				</h1>
			</Magnetic>
		</div>
	);
}
