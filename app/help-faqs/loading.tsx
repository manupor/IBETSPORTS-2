export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary-green mx-auto mb-4"></div>
        <p className="text-brand-soft-white">Loading Help & FAQs...</p>
      </div>
    </div>
  )
}
