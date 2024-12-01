import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, KeyRound } from "lucide-react";

export default function Auth() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Kirish</TabsTrigger>
          <TabsTrigger value="register">Ro'yhatdan o'tish</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Kirish</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                vel nobis modi.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="phone">Telefon:</Label>
                <Input id="phone" placeholder="+998" defaultValue="+998" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password:</Label>
                <Input id="password" placeholder="********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto font-bold flex items-center gap-3">
                Kirish <KeyRound />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Ro'yhatdan o'tish</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="phone">Telefon:</Label>
                <Input id="phone" placeholder="+998" defaultValue="+998" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password:</Label>
                <Input id="password" placeholder="********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto font-bold flex items-center gap-3">
                Keyingisi <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
