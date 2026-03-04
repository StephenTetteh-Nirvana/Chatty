import EditProduct from "@/components/products/EditProduct"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <div>
      {/* HEADER SECTION  */}
      <div className="gap-2">
        <div className="flex items-center gap-4">
          <Link href="/content/products">
            <Button className="flex items-center gap-1 cursor-pointer">
              <ArrowLeft />
              <h1 className="font-bold">Back</h1>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Edit Product</h1>
        </div>
        <p className="text-slate-400">Edit your products here. Make sure to save changes before exiting.</p>
      </div>

      <EditProduct/>
    </div>
  )
}

export default page