import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Contact() {
  type Status = 'idle' | 'sending' | 'success' | 'error'
  type FormData = {
    name: string
    email: string
    message: string
  }
  const [status, setStatus] = useState('idle' as Status)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Contact" description="Get in touch with Tyler Robinson" />
      <Navbar />
      <main className="container py-20">
        <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
        
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 rounded border bg-[color:var(--surface)] border-[color:var(--muted)]"
                value={formData.name}
                onChange={(e) => setFormData((prev: FormData) => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded border bg-[color:var(--surface)] border-[color:var(--muted)]"
                value={formData.email}
                onChange={(e) => setFormData((prev: FormData) => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded border bg-[color:var(--surface)] border-[color:var(--muted)]"
                value={formData.message}
                onChange={(e) => setFormData((prev: FormData) => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-3 bg-primary text-black rounded font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}