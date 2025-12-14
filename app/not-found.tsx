import { ArrowLeft, Eye, Users, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const messages = [
  "Oops! This page wandered off.",
  "We can’t find what you’re looking for.",
  "This page packed its bags and left.",
  "Nothing to see here literally.",
  "Are you lost? This page sure is.",
  "Well, this is awkward. Page not found.",
  "This link might be outdated or broken.",
  "Hmm... looks like this page doesn’t exist.",
  "The page you're looking for has retired early.",
  "You’ve hit a digital dead-end.",
  "That URL must’ve taken a wrong turn.",
  "Sorry, this path leads nowhere.",
  "We looked everywhere. No page here.",
];


export default function NotFound() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-muted mx-auto mb-4 w-fit rounded-full p-3">
            <Eye className="text-muted-foreground h-12 w-12" />
          </div>
          <CardTitle className="text-2xl font-bold">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            {randomMessage}
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Users className="text-primary h-16 w-16" />
            <Wifi className="text-primary h-16 w-16" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button
            variant="outline"
            className="w-full"
          >
            <Link href={"/"} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
