"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
	});

	const onLogin = async () => {};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-700">
			<h1 className="text-white text-3xl font-bold mb-6">Login</h1>
			<hr />
			<div className="mb-0.5">
				<label
					htmlFor="email"
					className="block text-white text-lg font-bold mb-2"
				>
					Email
				</label>
				<input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-blue-900"
					id="email"
					type="text"
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					placeholder="email"
				/>
			</div>
			<div className="mb-0.5">
				<label
					htmlFor="password"
					className="block text-white text-lg font-bold mb-2"
				>
					Password
				</label>
				<input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-blue-900"
					id="password"
					type="password"
					value={user.password}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					placeholder="Enter your password"
				/>
			</div>
			<button
				onClick={onLogin}
				className="p-2 border border-gray-300 rounded-lg mt-4 mb-4 focus:outline-none focus:border-gray-600"
			>
				Login
			</button>
			<Link href="/signup" className="mt-4">
				Sign up here
			</Link>
		</div>
	);
}
