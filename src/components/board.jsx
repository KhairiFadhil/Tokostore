import { cn } from "@/lib/utils"
function Card({title, children, className}){
    return(
        
<div className={cn("block rounded-xl bg-white shadow-xl dark:bg-neutral-700 text-left", className)}>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
        {title}
    </h5>
        {children}
  </div>
</div>

    )
}
export default Card