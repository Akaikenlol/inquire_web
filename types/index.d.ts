import { type Message as TMessage } from "ai/react";
import { type useChat } from "ai/react";

declare type HandleInputChange = ReturnType<
	typeof useChat
>["handleInputChange"];
declare type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
declare type SetInput = ReturnType<typeof useChat>["setInput"];

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

declare type ChatInputProps = {
	input: string;
	handleInputChange: HandleInputChange;
	handleSubmit: HandleSubmit;
	setInput: SetInput;
};
