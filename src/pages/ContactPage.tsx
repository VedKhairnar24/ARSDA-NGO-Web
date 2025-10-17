import { useEffect, useState } from 'react'
import { address, contacts, organizationName } from '../data/ngo'

type FormData = {
  name: string
  email: string
  message: string
}

const STORAGE_KEY = 'arsda-contact-form'

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [saved, setSaved] = useState<FormData | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as FormData
        setSaved(parsed)
      } catch {}
    }
  }, [])

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
    setSaved(form)
  }

  function handleClear() {
    localStorage.removeItem(STORAGE_KEY)
    setSaved(null)
  }

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <h2>Contact</h2>
      <p><strong>{organizationName}</strong></p>
      <p>{address.line1} {address.line2}</p>
      <p>
        Emails: {contacts.emails.join(', ')} | Phones: {contacts.phones.join(', ')} | WhatsApp: {contacts.whatsapp}
      </p>

      <form onSubmit={handleSave} style={{ display: 'grid', gap: '0.75rem', maxWidth: 520 }}>
        <label>
          Name
          <input value={form.name} onChange={(e) => update('name', e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
        </label>
        <label>
          Message
          <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={4} />
        </label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="submit">Save Locally</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>

      {saved && (
        <div style={{ background: '#f6f6f6', padding: '0.75rem' }}>
          <strong>Last saved (local)</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(saved, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}


