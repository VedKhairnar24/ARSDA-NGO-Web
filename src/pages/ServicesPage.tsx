import { services } from '../data/ngo'

export default function ServicesPage() {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}


