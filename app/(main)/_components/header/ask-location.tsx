"use client"

import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerDescription,
    DrawerTitle,
    DrawerFooter,
    DrawerTrigger
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

const AskLocation = () => {

    const [open, setOpen] = useState(false)
    const isDesktop = false

    const ask = () => {
        return (
            <div className='px-5 py-4 border-b-2 md:border-b-0'>
                <div className='flex items-center cursor-pointer'>
                    <span className='rounded-[50px] bg-blue-100 inline-block p-1'>
                        <MapPin color="#5094ed" size={15} />
                    </span>
                    <span className='mx-2 text-xs text-[#5094ed]'>Deliver to</span>
                    <ChevronDown size={15} color="#5094ed" />
                </div>
            </div>
        )
    }

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {ask()}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        Hello
                    </div>
                </DialogContent>
            </Dialog>
        )
    }
    // TODO: having warning that button have button inside

    return (
        <Drawer>
            <DrawerTrigger asChild>
                {ask()}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>What&apos;s your address?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        {/* <Button variant="outline" onClick={() => { }}>Cancel</Button> */}
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )

}

export default AskLocation