import { NextPage } from "next";

interface UserProfileProps {
	params: {
		id: string;
	};
}

const UserProfile: NextPage<UserProfileProps> = ({ params }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>Profile</h1>
			<hr />
			<p className="text-4xl">
				Profile page
				<span className="p-3 ml-2 rounded bg-orange-500 text-blue-500">
					{params.id}
				</span>
			</p>
		</div>
	);
};

export default UserProfile;
