"use client"

import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react"


const listItem = [
  {
    title: '',
    description: ''
  }
]

function Hamburger() {
  const [isOpen, setIsOpen ] = useState(false)
  return (
    <Drawer direction="right" >
      <DrawerTrigger asChild>
          <Menu />
      </DrawerTrigger>
      <DrawerContent className="bg-white flex flex-col rounded-t-[10px] h-full w-full mt-24 fixed bottom-0 right-0">
        <div className="mx-auto w-full max-w-sm bg-red-500">
        <DrawerHeader>
          <>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerClose asChild>
            <X />
          </DrawerClose>
          </>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
            >
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">

              <div className="text-[0.70rem] uppercase text-muted-foreground">
                Calories/day
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
            >
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
  )
}

export default Hamburger