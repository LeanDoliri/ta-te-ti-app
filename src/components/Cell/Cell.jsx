import "./Cell.css"

export function Cell ({children, updateBoard, index}) {
    return (
        <div className="Cell">
            {children}
        </div>
    )
}