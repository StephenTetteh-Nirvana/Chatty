'use client'

import { Button } from "@/components/ui/button"
import { useMainContext } from "@/context/MainContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  EllipsisVertical,
  SquarePen,
  Trash2Icon,
} from "lucide-react"


const ProductCardDropdown = () => {
  const {setShowDeleteCard} = useMainContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" 
          className="rounded-full flex items-center justify-center cursor-pointer p-2 h-6 w-6"
        >
          <EllipsisVertical color="black"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          <SquarePen/>
          Edit
        </DropdownMenuItem>
        
        <DropdownMenuItem  
          variant="destructive"
          className="cursor-pointer"
          onClick={()=>setShowDeleteCard(true)}
        >
          <Trash2Icon/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProductCardDropdown
