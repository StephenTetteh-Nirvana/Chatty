import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { product } from "@/types/types"

interface EditProductFormProps{
    product: product | undefined
}

const EditProductForm = ({product}: EditProductFormProps) => {
  return (
    <div className="w-full mt-5 md:mt-0 py-4 md:py-0">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="product-name"
                   className="font-bold"
                >
                  Product name
                </FieldLabel>
                <Input
                  id="product-name"
                  placeholder="Black Tee"
                  required
                  value={product?.title}
                  className="font-semibold text-slate-600"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="product-price"
                   className="font-bold"
                >
                  Price
                </FieldLabel>
                <Input
                  id="product-price"
                  placeholder="$0.00"
                  required
                  value={`$ ${product?.price}`}
                  className="font-semibold text-slate-600"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="product-stock"
                   className="font-bold"
                >
                  Stock
                </FieldLabel>
                <Input
                  id="product-stock"
                  placeholder="Number of pieces available"
                  required
                  value={`${product?.stock} available`}
                  className="font-semibold text-slate-600"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="product-description"
                  className="font-bold"
                >
                  Description
                </FieldLabel>
                <Textarea
                  id="product-description"
                  placeholder="Add product description here..."
                  className="resize-none font-semibold text-slate-600"
                  value={product?.description}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field >
            <Button type="submit" className="bg-[#2666CF] hover:bg-[#2666CF] hover:cursor-pointer">Update</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default EditProductForm;
