"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import { Send } from "lucide-react";

const ChatInput = () => {
	return (
		<div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
			<div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
				<div className="relative flex h-full flex-1 items-stretch md:flex-col">
					<div className="relative flex flex-col w-full flex-grow p-4">
						<form className="relative">
							<Textarea
								rows={4}
								autoFocus
								placeholder="Enter your question..."
								className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
							/>

							<Button
								size="sm"
								type="submit"
								className="absolute z-10 border border-border bg-teal-500 hover:bg-teal-700 right-5 bottom-5"
							>
								<Send className="size-4 invert" />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatInput;
