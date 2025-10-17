import Navbar from './Navbar'

interface ExampleComponentProps {
  title?: string
  children?: React.ReactNode
}

export default function ExampleComponent({ 
  title = "Example Component", 
  children 
}: ExampleComponentProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Include Navbar in this component */}
      <Navbar />
      
      <main className="flex-1 mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6">
          <section className="text-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700 mt-2">
              This is an example component that includes the Navbar component.
            </p>
          </section>

          {children && (
            <section className="bg-gray-50 border border-gray-200 p-4 rounded">
              <h3 className="font-semibold mb-2">Component Content</h3>
              {children}
            </section>
          )}

          <section className="bg-blue-50 border border-blue-100 p-4 rounded">
            <h3 className="font-semibold">Features</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Reusable Navbar component</li>
              <li>Flexible content area</li>
              <li>Customizable title</li>
              <li>Children prop support</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="border-t text-center py-4 text-sm text-gray-600">
        <small>© {new Date().getFullYear()} ARSDA (Regd.), Delhi</small>
      </footer>
    </div>
  )
}
