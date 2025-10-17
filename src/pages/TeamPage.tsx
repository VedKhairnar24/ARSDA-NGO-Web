import { executiveBody } from '../data/ngo'

export default function TeamPage() {
  return (
    <div>
      <h2>Executive Body</h2>
      <ul>
        {executiveBody.map((m) => (
          <li key={m.name}><strong>{m.role}</strong>: {m.name}</li>
        ))}
      </ul>
    </div>
  )
}


