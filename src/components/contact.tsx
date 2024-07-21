import * as React from "react";
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
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <>
      <div
        className="bg-gradient-to-r from-yellow-500 to-green-500 w-full inline-flex "
        id="contacts"
      >
        <div className="px-20 py-14 text-white w-1/2">
          <h1 className="text-4xl font-bold ">
            Lets discuss <br /> Your project
          </h1>
          <p className="mt-9">
            {`Let's figure out how to create an effective application, its
            cost and terms of its development`}
          </p>
        </div>
        <Card className=" w-1/2 rounded-xl shadow-2xl">
          <CardContent>
            <form>
              <div className="flex w-full items-center gap-2">
                <div className="w-1/2">
                  <div className="flex flex-col space-y-1.5 mb-8">
                    <Label htmlFor="name" className="text-slate-600">
                      Full name
                    </Label>
                    <Input id="name" placeholder="" type="text" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="b-name">Business name</Label>
                    <Input id="b-name" placeholder="" type="text" />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col space-y-1.5 mb-8">
                    <Label htmlFor="phone" className="text-slate-600">
                      Phone number
                    </Label>
                    <Input id="phone" placeholder="" type="number" />
                  </div>
                  
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Business mail</Label>
                    <Input id="email" placeholder="" type="email" />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Discuss the project</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Contact;
