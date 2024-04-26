export default function layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full">
      {props.children}
    </div>
  )
}
