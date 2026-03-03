"use client"

import { useMainContext } from "@/context/MainContext"
import { AnimatePresence, motion } from "motion/react" 
import DeleteProductCard from "@/components/products/DeleteProductCard" 

const ProductActionPopups = () => {
    const {showDeleteCard} = useMainContext()

    return ( 
      <>
      {/* DELETE PRODUCT CARD POPUP   */}
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
      </>

    )
}

export default ProductActionPopups;