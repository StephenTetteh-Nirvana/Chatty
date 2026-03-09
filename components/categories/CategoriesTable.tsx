import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pen, Trash } from "lucide-react"
import { Button } from "../ui/button"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Fashion",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
   {
    invoice: "INV001",
    paymentStatus: "Fashion",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  }
]

const CategoriesTable = () => {
  return (
    <Table>
      <TableCaption>A list of all your categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold">Id</TableHead>
          <TableHead className="font-bold">Name</TableHead>
          <TableHead className="text-right font-bold">Actions</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell className="flex justify-end">
                <Button variant="ghost" className="cursor-pointer">
                  <Pen size={15}/>
                </Button>
                <Button variant="ghost" className="cursor-pointer">
                  <Trash size={15} color="red"/>
                </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CategoriesTable
