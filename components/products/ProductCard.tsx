import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Eye } from "lucide-react"
import ProductCardDropdown from "./ProductCardDropdown"

interface ProductCardProps {
  product: {
    id: number,
    title: string,
    price: number,
    stock: number,
    description: string,
    image: string
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-lg">
      <div className="absolute inset-0 z-30 aspect-video bg-black/25 rounded-tr-lg rounded-tl-lg" />
      <img
        src={product.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 
        grayscale dark:brightness-40 rounded-tr-lg rounded-tl-lg"
      />

      <CardHeader>
        <CardAction>
          <ProductCardDropdown/>
        </CardAction>
        <CardTitle className="line-clamp-3 md:line-clamp-2">{product.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {product.description}
        </CardDescription>
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between mb-3">
          <CardTitle>${product.price}</CardTitle>
          <Badge variant="secondary" 
            className={product && product.stock > 0 ? "bg-green-500/80 font-semibold md:text-[12px] text-white" : "bg-red-500/80 font-semibold md:text-[12px] text-white"}
          >
            {product && product.stock ? product.stock + " in stock" : "Out of Stock"}
          </Badge>
        </div>
      </CardHeader>

      <CardFooter>
        {/* BUTTON FOR DESKTOPS  */}
        <Button className="lg:visible w-[84%] absolute bottom-2 group" variant="outline">
          {/* This span will be used for animation when hovering on the button  */}
          <span className="transition-[width] ease-in-out bg-black/80 w-0 z-99 
            absolute left-0 h-full rounded-md group-hover:w-full cursor-pointer"></span>
          <span className="group-hover:z-99 flex items-center gap-1 group-hover:text-white transition-colors ease-in-out cursor-pointer">
            View Details
            <Eye/>
          </span>
        </Button>

        {/* BUTTON FOR MOBILE AND TABLETS  */}
        <Button className="lg:hidden w-[84%] absolute bottom-2">
          View Details
          <span>
            <Eye/>
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
