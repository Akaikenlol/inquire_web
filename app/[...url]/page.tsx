import ChatWrapper from "@/components/ChatWrapper";
import { ragChat, reconstructUrl } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { PageProps } from "@/types";
import React from "react";

const Page = async ({ params }: PageProps) => {
	const reconstructedUrl = reconstructUrl({ url: params.url as string[] });

	const isAlreadyIndexed = await redis.sismember(
		"index-urls",
		reconstructedUrl
	);

	const sessionId = "mock-session";

	if (!isAlreadyIndexed) {
		await ragChat.context.add({
			type: "html",
			source: reconstructedUrl,
			config: { chunkOverlap: 50, chunkSize: 200 },
		});

		await redis.sadd("index-urls", reconstructedUrl);
	}

	console.log(params);
	console.log("isAlreadyIndexed", isAlreadyIndexed);

	return <ChatWrapper sessionId={sessionId} />;
};

export default Page;
