'use client'

import {dummyProducts} from "@/dummyProducts"
import { product } from "@/types/types"
import { useMainContext } from "@/context/MainContext"
import { AnimatePresence, motion } from "motion/react"
import ProductCard from "@/components/products/ProductCard"
import DeleteProductCard from "@/components/products/DeleteProductCard"

const page = () => {
  const {showDeleteCard} = useMainContext()

  return (
    <div className="relative">
      <div className="gap-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-slate-400">Manage your products here.</p>
      </div>
       {/* PRODUCTS CARD  */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2 py-4">
        {dummyProducts.map((product: product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* DELETE PRODUCT CARD  */}
      <AnimatePresence>
        {showDeleteCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <motion.div 
              initial={{ scale: 0.7 }}
              animate={{ scale: 1}}
              exit={{ scale: 0.7 }}
              className="w-full"
            >
              <DeleteProductCard/>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
 )
}

export default page