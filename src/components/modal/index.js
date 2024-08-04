import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

function Modal({children, onClose, className}){
    const ref = useRef()
    useEffect(
        () => {
            const handlerOutside = (event) => {
                if(!ref.current.contains(event.target) && ref.current){
                    onClose()
                }
            }
            document.addEventListener('mousedown', handlerOutside)
            return () => {
                document.removeEventListener('mousedown', handlerOutside)
            }
        },[onClose]
    )
    return(
        <div className={cn("modal", className)}>
            <div className="max-h-[80vh] max-w-[50vw] p-5 bg-white rounded-xl transition-all" ref={ref}>
                {children}
            </div>
        </div>
    )
}

export default Modal