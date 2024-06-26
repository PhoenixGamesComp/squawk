import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function PostCard({ avatarImgSrc, name, username, postContent }: any) {
    return (
        <Card className="bg-color-900">
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center w-full bg-neutral-900">
                        <Avatar className="w-12 h-12 hover:cursor-pointer">
                            <AvatarImage src={avatarImgSrc} className="rounded-full" />
                            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="pl-2 hover:cursor-pointer">
                            <p className="text-base text-neutral-50 font-bold">{name}</p>
                            <p className="text-sm text-neutral-500">{username}</p>
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-6">
                <p className="text-base text-neutral-50 px-2">{postContent}</p>
            </CardContent>
        </Card>
    );
}
