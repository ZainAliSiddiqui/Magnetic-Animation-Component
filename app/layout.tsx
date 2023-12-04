import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Magnetic Animation",
	description: "Magnetic Animation",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
