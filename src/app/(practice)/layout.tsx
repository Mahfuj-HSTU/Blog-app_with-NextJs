import Link from "next/link";

const PracticeLayout = ({ children, marketingSlot, salesSlot }: { children: React.ReactNode, marketingSlot: React.ReactNode, salesSlot: React.ReactNode }) => {
  return (
    <div className="m-8">
      <div>
        <nav className="flex gap-8">
          <Link className="hover:underline" href='/development'>Development</Link>
          <Link className="hover:underline" href='/marketing'>Marketing</Link>
          <Link className="hover:underline" href='/marketing/settings'>Settings</Link>
          <Link className="hover:underline" href='/sales'>Sales</Link>
        </nav>
      </div>

      <div className="flex gap-4">
        {marketingSlot}
        {salesSlot}
      </div>

      {children}
    </div>
  )
}

export default PracticeLayout;