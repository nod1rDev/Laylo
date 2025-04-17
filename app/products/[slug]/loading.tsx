import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-pink-600 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">Loading product details...</p>
      </div>
    </div>
  )
}
