import { LoaderIcon } from "lucide-react";

function ChatLoader() {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <LoaderIcon className="size-10 animate-spin text-primary" />
            <p className="text-center text-lg font-mono mt-4">Connecting to chat...</p>


        </div>
    )
}

export default ChatLoader;