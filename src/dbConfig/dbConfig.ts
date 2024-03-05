import mongoose from "mongoose";

export const connectToDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;

		connection.on("connected", () => {
			console.log("Connected to mongoDB");
		});

		connection.on("error", (err: any) => {
			console.log("Cannot connect to mongoDB", err);
			process.exit(1);
		});
	} catch (err: any) {
		console.log("Connect to mongoDB failed", err);
	}
};
