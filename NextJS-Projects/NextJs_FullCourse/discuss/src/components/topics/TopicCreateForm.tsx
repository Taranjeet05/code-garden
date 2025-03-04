import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

const TopicCreateForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Topic</DialogTitle>
          <DialogDescription>
            Write a new Topic to start discussion. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
          </div>
          <div>
            <Label htmlFor="discription" className="text-right">
              Discription
            </Label>
            <Textarea id="discription" name="discription" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TopicCreateForm;
