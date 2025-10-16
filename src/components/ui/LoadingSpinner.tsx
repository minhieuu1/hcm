export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className={`spinner ${sizes[size]}`}></div>
    </div>
  )
}
