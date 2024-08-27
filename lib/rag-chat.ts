import { RAGChat, upstash } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
	model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
});

export const reconstructUrl = ({ url }: { url: string[] }) => {
	const decodedComponents = url.map((component) =>
		decodeURIComponent(component)
	);

	return decodedComponents.join("/");
};
