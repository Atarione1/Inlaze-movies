
import SearchP from "@/components/search"
import { Props } from "@/interfaces/interfaces"
import { Suspense } from "react"

export default function SearchPage({ params }: { params: Props }) {

  return (
    <Suspense>
      <SearchP params={params} />
    </Suspense>
  )
}
