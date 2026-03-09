import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import CategoriesTable from "@/components/categories/CategoriesTable"

const page = () => {
    return (
      <div>
        {/* HEADER SECTION  */}
        <div className="flex items-center justify-between w-full">
          <div className="gap-2">
            <h1 className="text-2xl font-bold">Categories</h1>
            <p className="text-slate-400">View and manage your categories here.</p>
          </div>
          
          <div>
            <Button 
              className="flex items-center gap-2 cursor-pointer bg-[#2666CF] text-white hover:bg-[#2666CF]"
            >
              <Plus color="white"/>
              Add Category
            </Button>
          </div>
        </div>

        {/* CATEGORIES TABLE  */}
        <CategoriesTable/>
      </div>
    )
}

export default page