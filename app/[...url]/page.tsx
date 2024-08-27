import { ragChat, reconstructUrl } from "@/lib/rag-chat";
import React from "react";

const Page = async ({ params }: PageProps) => {
	const reconstructedUrl = reconstructUrl({ url: params.url as string[] });
	console.log(params);

	await ragChat.context.add({
		type: "html",
		source: reconstructedUrl,
		config: { chunkOverlap: 50, chunkSize: 200 },
	});

	return <div>Hello Page {params.url}</div>;
};

export default Page;
