'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMainContext } from "@/context/MainContext"

const ProductDetailsCard = () => {
  const {setEditCardData} = useMainContext()

  return (
    <Card 
      className="mx-auto w-full max-w-sm"
    >
      <CardHeader>
        <CardTitle className="text-xl">Edit Product</CardTitle>
        <CardDescription>
          Update your product details here. Make sure to save your changes before exiting.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2">
        <Button  
          size="sm" 
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700"
        >
          Save Changes
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="w-full cursor-pointer"
          onClick={()=>setEditCardData(false)}
        >
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductDetailsCard
