'use client'

import {dummyProducts} from "@/dummyProducts"
import { useParams } from "next/navigation"
import { Card, CardContent } from "../ui/card"
import { ImageOff } from "lucide-react"

const EditProduct = () => {
    const { id } = useParams()
    const foundProduct = dummyProducts.find((p)=> p.id === Number(id))
    console.log("foundProduct:", foundProduct)

    return (
      <div className="flex flex-col gap-2">
        {/* IMAGE SECTION  */}
        <div className="mt-3">
          {foundProduct?.image ? (
            <div className="bg-slate-200 h-70 w-full rounded-lg flex items-center justify-center rounded-lg">
              <img
                src={foundProduct?.image}
                alt={foundProduct?.title || "Product Image"}
                className="w-full rounded-lg  w-full h-62 object-contain"
              />
            </div>
          )
          : 
          (
            <Card className="bg-slate-200 h-70 w-full rounded-lg flex items-center justify-center">
                <CardContent>
                <div className="flex flex-col gap-1">
                    <ImageOff className="mx-auto" color="grey" />
                    <p className="text-slate-500 font-bold">No image preview available</p>
                </div>
                </CardContent>
            </Card>
          )}
        <h2>{foundProduct?.title}</h2>
      </div>
      </div>
    )
}

export default EditProduct