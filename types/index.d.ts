import { type Message as TMessage } from "ai/react";

declare type PageProps = {
	params: {
		url: string | string[] | undefined;
	};
};

declare type MessagesProps = {
	messages: TMessage[];
};

declare type MessageProps = {
	content: string;
	isUserMessage: boolean;
};
