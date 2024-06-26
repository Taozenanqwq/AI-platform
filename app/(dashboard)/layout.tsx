export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full w-72  md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="text-white">Hello Sidebar</div>
      </div>
      <main className="md:pl-72">Hello Content</main>
    </div>
  )
}
